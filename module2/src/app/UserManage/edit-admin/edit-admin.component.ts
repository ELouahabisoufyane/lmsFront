import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User1";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";


@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  adminid:number;
  admin:User;
  adminForm:FormGroup;
  constructor(private ro:ActivatedRoute ,public cs:AdminService ,private fb:FormBuilder,private r:Router) {

  }

  ngOnInit(): void {
    this.adminid=this.ro.snapshot.params['id'];
    this.cs.getAdmin(this.adminid).subscribe(
      {
        next:(data)=>{

          this. admin=data;
          this. adminForm=this.fb.group({
            type:this.fb.control(this. admin.type),
            id:this.fb.control(this. admin.id),
            username :this.fb.control(this. admin.username),
            email:this.fb.control(this. admin.email),
            password:this.fb.control(this. admin.password),
            cnea:this.fb.control(this. admin.cnea),
            cne:this.fb.control(this. admin.cne),
            cnep:this.fb.control(this. admin.cnep),


          });
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  handleUpdateadmin(){
    let p=this.adminForm.value;
    this.cs.updateAdmin(p).subscribe(
      {
        next:(data)=>{alert(" Admin update successfully")},
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  annuler() {
    this.r.navigateByUrl("/admin/adminN")
  }


}
