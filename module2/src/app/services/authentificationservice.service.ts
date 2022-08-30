import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../Models/User";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationserviceService {

  baseUrl!:string;
  authenticatedUser!:User;
  constructor(private http:HttpClient,private router:Router) {
    this.baseUrl = "http://localhost:8080/user";



  }
  Login(user:User):Observable<any>{

    return this.http.post<User>(this.baseUrl+"/login",user);

  }
  authenticateUser(user:User){
    this.authenticatedUser=user;
    localStorage.setItem("user",JSON.stringify({"username":user.username,"roles":user.roles}));

  }
  hasRole(role:string):boolean{
    for (let index = 0; index < this.authenticatedUser.roles.length; index++) {
      if (this.authenticatedUser.roles[index].role==role) {
        return true;
      }
    }
    return false;
  }
  isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl("/index");
  }
}
