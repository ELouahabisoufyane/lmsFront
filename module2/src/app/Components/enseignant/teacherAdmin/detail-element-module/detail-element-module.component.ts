import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AnnonceService} from "../../../../services/annonce.service";
import {ElementService} from "../../../../services/element.service";
import {Axe} from "../../../../Models/axe";
import {AxeService} from "../../../../services/axe.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-detail-element-module',
  templateUrl: './detail-element-module.component.html',
  styleUrls: ['./detail-element-module.component.css']
})
export class DetailElementModuleComponent implements OnInit {
  elementid:number;
  axeId:number;
  afficher:boolean=false;
  form: FormGroup;
  editorContent: any;
  content:any;
  pub: boolean=false;
  annonces:Array<any>=[];
  Theme:Axe;
  addThemeForm: FormGroup;
  Themes:Axe[];
  fileName = '';
  constructor(private http: HttpClient,private ro:ActivatedRoute,private fb: FormBuilder,private as:AnnonceService,private axeS:AxeService,private EleService:ElementService) {
  }
  ngOnInit(): void {
    this.elementid=this.ro.snapshot.params['id'];
    this.form=this.fb.group({
      formModel :this.fb.control(null,[Validators.required]),
    });
    this.addThemeForm=this.fb.group(
      {
        id: this.fb.control(null,[Validators.required]),
        titre :this.fb.control(null,[Validators.required]),
        description :this.fb.control(null,[Validators.required]),
        contentHtml :this.fb.control(this.editorContent,[Validators.required]),
      }
    )
    this.EleService.getAllThemes(this.elementid).subscribe({
      next:(data)=>{
        this.Themes=data;
        console.log(data);
      }
    })
  }
  handleAfficher() {
    if(this.afficher==false){
      this.afficher=true;
    }
    else {
      this.afficher=false;
    }
  }

  publier() {
    this.pub=true;
    this.handleAfficher();

    this.annonces.push(this.editorContent);
    this.editorContent=null;

  }
  handleaddTheme() {

    this.Theme=this.addThemeForm.value;
    this.EleService.addTheme(this.Theme,this.elementid).subscribe({
        next:(data)=>{
          alert("bien ajouter");
          this.ngOnInit();
        }
      }
    );

  }

  handleAddAxe() {
    this.Theme=this.addThemeForm.value;
    console.log(this.Theme)
    this.axeS.addAxe(this.Theme,this.axeId).subscribe({
        next:(data)=>{
          alert("bien ajouter");
          this.ngOnInit();
        }
      }
    );

  }
  handleIdAxe(id: number) {
    this.axeId=id;
  }
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }
}
