import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Module} from "../Models/Module";



@Injectable({
  providedIn: 'root'
})
export class ProfService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }




  public addProf(c: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/prof/add/${"Prof"}`, c);
  }
  public updateProf(c: any): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+"/prof/update", c);
  }

  public deleteProf(id: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl +"/prof/delete/"+id);
  }


  public getpageProfs(p:number): Observable<any>{
    return this.http.get(this.apiServerUrl+'/prof/list/'+p);
  }
  getErrorMessage(field:string,error:any):string{
    if(error['required']){
      return field+" is Required";
    }
    else
      return "" ;
  }

  public chercherProf(k:string,p:number,s:number):Observable<any>{
    return this.http.get(this.apiServerUrl+'/prof/chercher?mc='+k+'&page='+p+'&size='+s);

  }


  public getProf(id: number):Observable<any> {
    return this.http.get(this.apiServerUrl+'/prof/findbyid/'+id);
  }
  public getProfs():Observable<any> {
    return this.http.get(this.apiServerUrl+'/prof/all');
  }
  public getcard():Observable<any> {
    return this.http.get(this.apiServerUrl+'/prof/card');
  }
  public getFiliere(id:number):Observable<any> {
    return this.http.get(this.apiServerUrl+'/prof/maFiliere/'+id);
  }

  getModules(profid: number) :Observable<Module[]>{
    return this.http.get<Module[]>(this.apiServerUrl+'/prof/modules/'+profid);
  }
}
