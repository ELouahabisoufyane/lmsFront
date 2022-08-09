import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private a:String="Admin";
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }




  public addAdmin(c: any): Observable<any> {
    return this.http.post(this.apiServerUrl+"/admin/add/"+this.a, c);
  }
  public updateAdmin(c: any): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+"/admin/update", c);
  }

  public deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl +"/admin/delete/"+id);
  }


  public getpageAdmins(p:number): Observable<any>{
    return this.http.get(this.apiServerUrl+'/admin/list/'+p);
  }
  getErrorMessage(field:string,error:any):string{
    if(error['required']){
      return field+" is Required";
    }
    else
      return "" ;
  }

  public chercherAdmin(k:string,p:number,s:number):Observable<any>{
    return this.http.get(this.apiServerUrl+'/admin/chercher?mc='+k+'&page='+p+'&size='+s);

  }


  public getAdmin(id: number):Observable<any> {
    return this.http.get(this.apiServerUrl+'/admin/findbyid/'+id);
  }
  public getcard():Observable<any> {
    return this.http.get(this.apiServerUrl+'/admin/card');
  }
}
