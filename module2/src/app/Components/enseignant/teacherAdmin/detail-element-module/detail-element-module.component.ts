import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AnnonceService} from "../../../../services/annonce.service";
import {ElementService} from "../../../../services/element.service";
import {Axe} from "../../../../Models/axe";
import {AxeService} from "../../../../services/axe.service";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {FileUploadService} from "../../../../services/file-upload-service.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-detail-element-module',
  templateUrl: './detail-element-module.component.html',
  styleUrls: ['./detail-element-module.component.css']
})
export class DetailElementModuleComponent implements OnInit {
  elementid: number;
  axeId: number;
  afficher: boolean = false;
  form: FormGroup;
  editorContent: any;
  content: any;
  pub: boolean = false;
  annonces: Array<any> = [];
  Theme: Axe;
  addThemeForm: FormGroup;
  Themes: Axe[];
  fileName = '';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private http: HttpClient, private ro: ActivatedRoute, private fb: FormBuilder, private as: AnnonceService, private axeS: AxeService, private EleService: ElementService, private uploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.elementid = this.ro.snapshot.params['id'];
    this.form = this.fb.group({
      formModel: this.fb.control(null, [Validators.required]),
    });
    this.addThemeForm = this.fb.group(
      {
        id: this.fb.control(null, [Validators.required]),
        titre: this.fb.control(null, [Validators.required]),
        description: this.fb.control(null, [Validators.required]),
        contentHtml: this.fb.control(this.editorContent, [Validators.required]),
      }
    )
    //this.fileInfos = this.uploadService.getFiles(this.axeId);
    this.EleService.getAllThemes(this.elementid).subscribe({
      next: (data) => {
        this.Themes = data;
        this.Themes.forEach((x)=>{
          this.uploadService.getFiles(x.id).subscribe((data)=>{
            x.ressorces=data;
            console.log(data);
            x.subAxes.forEach((y)=>{
              this.uploadService.getFiles(y.id).subscribe((data)=>{
                y.ressorces=data;
                console.log(data);
              })
            })
          })

        })
      }
    })
  }

  handleAfficher() {
    if (this.afficher == false) {
      this.afficher = true;
    } else {
      this.afficher = false;
    }
  }

  publier() {
    this.pub = true;
    this.handleAfficher();

    this.annonces.push(this.editorContent);
    this.editorContent = null;

  }

  handleaddTheme() {

    this.Theme = this.addThemeForm.value;
    this.EleService.addTheme(this.Theme, this.elementid).subscribe({
        next: (data) => {
          alert("bien ajouter");
          this.ngOnInit();
        }
      }
    );

  }

  handleAddAxe() {
    this.Theme = this.addThemeForm.value;
    console.log(this.Theme)
    this.axeS.addAxe(this.Theme, this.axeId).subscribe({
        next: (data) => {
          alert("bien ajouter");
          this.ngOnInit();
        }
      }
    );

  }

  handleIdAxe(id: number) {
    this.axeId = id;
  }

  selectFile(event: any): void {
    console.log(event.target.files);
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile, this.axeId).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles(this.axeId);
              this.ngOnInit();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }

}
