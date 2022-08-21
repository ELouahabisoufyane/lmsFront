import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {editLink} from "@syncfusion/ej2-angular-richtexteditor";
import {AnnonceService} from "../../../../services/annonce.service";



@Component({
  selector: 'app-detail-element-module',
  templateUrl: './detail-element-module.component.html',
  styleUrls: ['./detail-element-module.component.css']
})
export class DetailElementModuleComponent implements OnInit {
   elementid:number;
   afficher:boolean=false;
   form: FormGroup;
   editorContent: any;
   pub: boolean=false;
   annonces:Array<string>;




  constructor(private ro:ActivatedRoute,private fb: FormBuilder,private as:AnnonceService) {


  }

  ngOnInit(): void {
    this.elementid=this.ro.snapshot.params['id'];
    this.form=this.fb.group({
      titre :this.fb.control(null,[Validators.required]),
    });
  }



  handleAfficher() {
    if(this.afficher==false){
      this.afficher=true;
    }
    else {
      this.afficher=false;
    }
  }


  publier(editorContent: any) {
    this.pub=true;
    this.handleAfficher();
    let a:string;
    a=editorContent.toString();
    this.as.addAnnonce(a).subscribe(
      {
        next:(data)=>{

          this.ngOnInit();
        }
      }
    )

  }
}
