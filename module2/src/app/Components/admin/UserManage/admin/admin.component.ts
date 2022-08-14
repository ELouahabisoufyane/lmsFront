
import {FormBuilder, FormGroup} from "@angular/forms";


import {Router} from "@angular/router";

import {Component, OnInit} from "@angular/core";
import {AdminService} from "../../../../services/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pages: Array<any>;
  currentPage: number=0;
  admins: Array<any>;
  pagesize:number=4;
  totalPages :number=0;
  errorMessage!:string;
  chercher:FormGroup;
  caction:string="all";
  constructor(private us:AdminService,private f:FormBuilder,private ro:Router) { }

  ngOnInit(): void {
    this.chercher=this.f.group(
      {keyword:this.f.control(null)}
    );
    this.handleGetpageAdmins();

  }
  handleGetpageAdmins(){
    this.us.getpageAdmins(this.currentPage).subscribe(
      data=>{

        this.admins=data['content'];

        this.pages=new Array(data['totalPages']);
        this.totalPages=data['totalPages'];
      },
      error => {
        console.log(error.error.message);
      }



    )
  }

  handleEditAdmin(c: any) {
    this.ro.navigateByUrl("/admin/editadmin/"+c.id);
  }

  handleDeleteAdmin(c: any) {
    let conf=confirm("etes-vous sur de vouloir supprimer");
    if(conf==false)
      return;
    else{
      this.us.deleteAdmin(c.id).subscribe(
        {
          next:(data)=>{
            let i =this.admins.indexOf(c);
            this.admins.splice(i,1);
          }
        }
      )
    }
  }

  handlechercherAdmin() {
    this.caction="chercher";
    let k=this.chercher.value.keyword;
    if(k){
      this.us.chercherAdmin(k,this.currentPage,this.pagesize).subscribe(
        {
          next:(data)=>{
            this.admins=data['content'];
            this.pages=new Array(data['totalPages']);
            this.totalPages=data['totalPages'];
          }
        }
      )}
    else {
      this.handleGetpageAdmins();
    }

  }

  handleNewAdmin() {
    this.ro.navigateByUrl("/admin/newadmin");
  }
  gotopage(i:number){
    this.currentPage=i;
    if(this.caction=="all")
      this.handleGetpageAdmins();
    else
      this.handlechercherAdmin();

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
