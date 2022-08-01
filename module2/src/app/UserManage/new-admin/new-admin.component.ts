import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  adminForm:FormGroup;


  constructor(private fb:FormBuilder,public c:AdminService,private r:Router) { }

  ngOnInit(): void {


    this.adminForm=this.fb.group({

      username :this.fb.control(null,[Validators.required]),
      email:this.fb.control(null,[Validators.required]),
      password:this.fb.control(null,[Validators.required]),
      cnea:this.fb.control(null)



    });}





  handleadduser(){
    let cl=this.adminForm.value;

    this.c.addAdmin(cl).subscribe(
      {
        next:(data)=>{
          alert("Admin added succesfully");
          this.adminForm.reset();
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  annuler() {
    this.r.navigateByUrl("/admin/adminN")
  }

}
