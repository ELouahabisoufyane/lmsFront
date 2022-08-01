import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {Appuser} from "../model/User";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users:Appuser[]=[];

  authenticatedUser:Appuser|undefined;

  constructor() {
    this.users.push({userId:1,username:"admin",password:"admin123",roles:["USER","ADMIN"]});
    this.users.push({userId:2,username:"user1",password:"123",roles:["USER"]});
    this.users.push({userId:3,username:"user2",password:"456",roles:["USER"]});
   }
   public login(username:string,password:string):Observable<Appuser>{
    let appUser=this.users.find(u=>u.username==username);
    if(!appUser) return throwError(()=>new Error("User not found"));
    if(appUser.password!=password){
      return throwError(()=>new Error("Incorrect password"));
    }
    return of(appUser);
   }
   public authenticateUser(appuser:Appuser):Observable<boolean>{
      this.authenticatedUser=appuser;
      localStorage.setItem("authUser",JSON.stringify({username:appuser.username}));
    return of(true);
   }
   public hasRole(role:string):boolean{
    return  this.authenticatedUser!.roles.includes(role);
   }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
  public logout():Observable<boolean>{
      this.authenticatedUser=undefined;
      localStorage.removeItem("authUser");
      return of(true);


  }
}
