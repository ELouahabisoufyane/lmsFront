import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from "../Models/User";

import {AuthentificationserviceService} from "../services/authentificationservice.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginGroup!: FormGroup;
  user: User = { id: Number(null), username: "", password: "", roles: [] };
  username: string;
  password!: string;
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
    console.log("----------------------satrt login--------------------------");
    console.log(this.username);
    // this.user=this.LoginGroup.value;
    this.user.username = this.username;
    this.user.password = this.password;
    this.auth.Login(this.user).subscribe((data) => {
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
    )
  }
}
