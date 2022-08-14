import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ClassService} from "../../../../services/class.service";



@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  classes! :Array<any>;
  currentPage:number=0;
  pagesize:number=6;
  totalPages :number=0;
  pages:Array<any>;
  errorMessage!:string;
  chercher!:FormGroup;
  caction:string="all";
  constructor(public cs:ClassService,private f:FormBuilder,private ro:Router ) { }

  ngOnInit(): void {
    this.chercher=this.f.group(
      {keyword:this.f.control(null)}
    );
    this.handleGetpageclasses();
    }
    handleGetallclasses(){
      this.cs.getAllclasses().subscribe(
        {
          next :(data)=>{
            this.classes=data;
          },
          error:(err)=>{
            this.errorMessage=err;
          }})
    }
  handleDeleteclass(c:any){
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
      else{
          this.cs.deleteClasse(c.id).subscribe(
            {
              next:(data)=>{
                let i =this.classes.indexOf(c);
                this.classes.splice(i,1);
              }
            }
          )
      }
        }
        handlechercherclass() {

          this.caction="chercher";
          let k=this.chercher.value.keyword;
          if(k){
          this.cs.chercherClass(k,this.currentPage,this.pagesize).subscribe(
            {
              next:(data)=>{
                this.classes=data['content'];
                this.pages=new Array(data['totalPages']);
                this.totalPages=data['totalPages'];
              }
            }
          )}
          else {
            this.handleGetpageclasses();
          }

        }
        handleGetpageclasses(){
          this.cs.getpageClasses(this.currentPage).subscribe(
              data=>{

                this.classes=data['content'];

                this.pages=new Array(data['totalPages']);
                this.totalPages=data['totalPages'];
              },
             error => {
                console.log(error.error.message);
             }



              )
        }

        gotopage(i:number){
          this.currentPage=i;
          if(this.caction=="all")
            this.handleGetpageclasses();
          else
            this.handlechercherclass();

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

        handleNewClass(){
          this.ro.navigateByUrl("/admin/newClass");
        }
        handleEditclass(c:any){
          this.ro.navigateByUrl("/admin/editClass/"+c.id);

        }




      }
