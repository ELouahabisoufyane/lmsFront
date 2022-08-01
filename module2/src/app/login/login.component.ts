import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import {Appuser} from "../model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errormessage:any;
  hide=true;
  constructor(private fb:FormBuilder,private authService:AuthenticationService ,private router: Router) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username :this.fb.control("admin"),
      password:this.fb.control("admin123")

    })


  }
  password_show_hide(){
    if(this.hide!=true)
      this.hide=true;
    else
    this.hide=false;
  }
  handlelogin(){
    let username=this.userFormGroup.value.username;
    let password=this.userFormGroup.value.password;
    this.authService.login(username,password).subscribe({
      next:(appUser:Appuser)=>{
        this.authService.authenticateUser(appUser).subscribe(
          {
            next:(data:boolean)=>{
              this.router.navigateByUrl("/admin/home");
            }
          }
        );
      },
      error:(err)=>{
        this.errormessage=err;
      }
    })
  }
}
