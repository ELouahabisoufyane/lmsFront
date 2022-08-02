import { Component, OnInit } from '@angular/core';


import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {ProfService} from "../../services/prof.service";

@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent implements OnInit {
  pages: Array<any>;
  currentPage: number=0;
  profs: any[];
  pagesize:number=4;
  totalPages :number=0;
  errorMessage!:string;
  chercher:FormGroup;
  caction:string="all";
  constructor(private us:ProfService,private f:FormBuilder,private ro:Router) { }

  ngOnInit(): void {
    this.chercher=this.f.group(
      {keyword:this.f.control(null)}
    );
    this.handleGetpageprofs();

  }
  handleGetpageprofs(){
    this.us.getpageProfs(this.currentPage).subscribe(
      data=>{

        this.profs=data['content'];

        this.pages=new Array(data['totalPages']);
        this.totalPages=data['totalPages'];
      },
      error => {
        console.log(error.error.message);
      }



    )
  }

  handleEditProf(c: any) {
    this.ro.navigateByUrl("/admin/editprof/"+c.id);
  }

  handleDeleteProf(c: any) {
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
    else{
      this.us.deleteProf(c.id).subscribe(
        {
          next:(data)=>{
            let i =this.profs.indexOf(c);
            this.profs.splice(i,1);
          }
        }
      )
    }
  }

  handlechercherProf() {
    this.caction="chercher";
    let k=this.chercher.value.keyword;
    if(k){
      this.us.chercherProf(k,this.currentPage,this.pagesize).subscribe(
        {
          next:(data)=>{
            this.profs=data['content'];
            this.pages=new Array(data['totalPages']);
            this.totalPages=data['totalPages'];
          }
        }
      )}
    else {
      this.handleGetpageprofs();
    }

  }

  handleNewProf() {
    this.ro.navigateByUrl("/admin/newprof");
  }
  gotopage(i:number){
    this.currentPage=i;
    if(this.caction=="all")
      this.handleGetpageprofs();
    else
      this.handlechercherProf();

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
