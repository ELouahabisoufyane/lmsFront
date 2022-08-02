import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from "@angular/forms";

import {ProfService} from "../../services/prof.service";
import {Router} from "@angular/router";
import {EtudiantService} from "../../services/etudiant.service";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  pages: Array<any>;
  currentPage: number=0;
  etudiants: Array<any>;
  pagesize:number=4;
  totalPages :number=0;
  errorMessage!:string;
  chercher:FormGroup;
  caction:string="all";
  constructor(private us:EtudiantService,private f:FormBuilder,private ro:Router) { }

  ngOnInit(): void {
    this.chercher=this.f.group(
      {keyword:this.f.control(null)}
    );
    this.handleGetpageEtudiants();

  }
  handleGetpageEtudiants(){
    this.us.getpageEtudiants(this.currentPage).subscribe(
      data=>{

        this.etudiants=data['content'];

        this.pages=new Array(data['totalPages']);
        this.totalPages=data['totalPages'];
      },
      error => {
        console.log(error.error.message);
      }



    )
  }

  handleEditEtudiant(c: any) {
    this.ro.navigateByUrl("/admin/editetudiant/"+c.id);
  }

  handleDeleteEtudiant(c: any) {
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
    else{
      this.us.deleteEtudiant(c.id).subscribe(
        {
          next:(data)=>{
            let i =this.etudiants.indexOf(c);
            this.etudiants.splice(i,1);
          }
        }
      )
    }
  }

  handlechercherEtudiant() {
    this.caction="chercher";
    let k=this.chercher.value.keyword;
    if(k){
      this.us.chercherEtudiant(k,this.currentPage,this.pagesize).subscribe(
        {
          next:(data)=>{
            this.etudiants=data['content'];
            this.pages=new Array(data['totalPages']);
            this.totalPages=data['totalPages'];
          }
        }
      )}
    else {
      this.handleGetpageEtudiants();
    }

  }

  handleNewEtudiant() {
    this.ro.navigateByUrl("/admin/newetudiant");
  }
  gotopage(i:number){
    this.currentPage=i;
    if(this.caction=="all")
      this.handleGetpageEtudiants();
    else
      this.handlechercherEtudiant();

  }

  gotoprevious(){
    if(this.currentPage==0)
      this.gotopage(this.currentPage);
    else{
      this.currentPage--;
      this.gotopage(this.currentPage);}
  }
  gotonext(){
    if(this.currentPage==this.totalPages-1)
      this.gotopage(this.currentPage);
    else{
      this.currentPage++;
      this.gotopage(this.currentPage);}

  }


}
