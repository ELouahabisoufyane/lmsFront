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
import {Teacher} from "../../../../Models/teacher";
import {Element} from "../../../../Models/Element";
import {Student} from "../../../../Models/student";
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
  oldTheme:Axe;
  editTheme:FormGroup;
  prof: Teacher;
  element:Element;
  etudaints: Student[];
  constructor(private http: HttpClient, private ro: ActivatedRoute, private fb: FormBuilder, private as: AnnonceService, private axeS: AxeService, private EleService: ElementService, private uploadService: FileUploadService) {
  }

  ngOnInit(): void {

    this.elementid = this.ro.snapshot.params['id'];
    this.EleService.getProf(this.elementid).subscribe({
      next:(data)=>{
        this.prof=data;
      }
    });
    this.EleService.getEtudiants(this.elementid).subscribe({
      next:(data)=>{
        this.etudaints=data;
      }
    })
    this.EleService.getElement(this.elementid).subscribe({
      next:(data)=>{
        this.element=data;
      }
    })
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
    );
    this.editTheme= this.fb.group(

      {
        id: this.oldTheme?.id,
        titre: this.oldTheme?.titre,
        description: this.oldTheme?.description,
        contentHtml: this.oldTheme?.contentHtml,
      }
    );
    //this.fileInfos = this.uploadService.getFiles(this.axeId);
    this.EleService.getAllThemes(this.elementid).subscribe({
      next: (data) => {
        this.Themes = data;
        this.Themes.forEach((x)=>{
          this.uploadService.getFiles(x.id).subscribe((data)=>{
            x.ressources=data;
            console.log(data);
            x.subAxes.forEach((y)=>{
              this.uploadService.getFiles(y.id).subscribe((data)=>{
                y.ressources=data;
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

  handleDeleteAxe(id: number) {
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
    else{
    this.axeS.deleteAxe(id).subscribe({
      next:(data)=>{
        alert("Axe deleted successfuly");
        this.ngOnInit();
      }
    });

  }
  }

  getoldTheme(t: Axe) {
    this.oldTheme=t;
    this.ngOnInit();


  }

  handleeditTheme() {
    let t= this.editTheme.value;

    this.EleService.addTheme(t, this.elementid).subscribe({
        next: (data) => {
          alert("bien modifier");
          this.ngOnInit();
        }
      }
    );
  }

  handelDeleteRessource(id:string) {
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
    else {
      this.axeS.deleteRessource(id).subscribe({
        next: (data) => {
          alert("Resource deleted successfuly");
          this.ngOnInit();
        }
      })
    }
  }

  addContent(editorContent: any) {
    let content=editorContent.toString();
    this.axeS.addContent(content,this.axeId).subscribe({
      next:(data)=>{
        alert("content aded successfully");
        this.editorContent=null;
        this.ngOnInit();

      }
    })

  }
}
