import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthentificationserviceService} from "../../services/authentificationservice.service";
import {User} from "../../Models/User";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginGroup!: FormGroup;
  user: User = { id: Number(null), username: "", password: "", roles: [],selec:null };
  username: string;
  password!: string;
  errormessage:any;
  hide=true;
  constructor(private auth:AuthentificationserviceService,
              private fb: FormBuilder,
              private router: Router) {


  }


  ngOnInit(): void {
    this.LoginGroup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }


  handleLogin() {


    this.user.username =this.LoginGroup.value.username;
    this.user.password = this.LoginGroup.value.password;
    this.auth.Login(this.user).subscribe({
      next:(data) =>
      {
          if(data){
        console.log(data.roles[0].role);
        this.auth.authenticateUser(data);

        if (this.auth.hasRole("Admin")) {
          this.router.navigateByUrl("/admin");
        } else if (this.auth.hasRole("student")) {
          this.router.navigateByUrl("/student");
        } else if (this.auth.hasRole("Prof")) {
          this.router.navigateByUrl("/teacher/homet/"+data.id);
        }
          }
          else{
            this.errormessage="user not find";
          }

      }
      }
    )
  }
  password_show_hide(){
    if(this.hide!=true)
      this.hide=true;
    else
      this.hide=false;
  }
}
