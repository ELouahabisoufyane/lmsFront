import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from "@angular/forms";


import {Router} from "@angular/router";
import {FiliereService} from "../../../../services/filiere.service";


@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {


  pages: Array<any>;
  currentPage: number=0;
  filieres: Array<any>;
  pagesize:number=4;
  totalPages :number=0;
  errorMessage!:string;
  chercher:FormGroup;
  caction:string="all";
  constructor(private us:FiliereService,private f:FormBuilder,private ro:Router) { }

  ngOnInit(): void {
    this.chercher=this.f.group(
      {keyword:this.f.control(null)}
    );
    this.handleGetpageFilieres();

  }
  handleGetpageFilieres(){
    this.us.getpageFilieres(this.currentPage).subscribe(
      data=>{

        this.filieres=data['content'];

        this.pages=new Array(data['totalPages']);
        this.totalPages=data['totalPages'];
      },
      error => {
        console.log(error.error.message);
      }



    )
  }

  handleEditFiliere(c: any) {
    this.ro.navigateByUrl("/admin/editfiliere/"+c.id);
  }

  handleDeleteFiliere(c: any) {
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
    else{
      this.us.deleteFiliere(c.id).subscribe(
        {
          next:(data)=>{
            let i =this.filieres.indexOf(c);
            this.filieres.splice(i,1);
          }
        }
      )
    }
  }

  handlechercherFiliere() {
    this.caction="chercher";
    let k=this.chercher.value.keyword;
    if(k){
      this.us.chercherFiliere(k,this.currentPage,this.pagesize).subscribe(
        {
          next:(data)=>{
            this.filieres=data['content'];
            this.pages=new Array(data['totalPages']);
            this.totalPages=data['totalPages'];
          }
        }
      )}
    else {
      this.handleGetpageFilieres();
    }

  }

  handleNewFiliere() {
    this.ro.navigateByUrl("/admin/newfiliere");
  }
  gotopage(i:number){
    this.currentPage=i;
    if(this.caction=="all")
      this.handleGetpageFilieres();
    else
      this.handlechercherFiliere();

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

  handleConsulter(c:any) {

    this.ro.navigateByUrl("/admin/ftemplate/"+c.id);
  }
}
