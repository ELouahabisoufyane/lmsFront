import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }




  public addFiliere(c: any, chef: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/filiere/add/${chef}`, c);
  }
  public updateFiliere(c: any): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+"/filiere/update", c);
  }

  public deleteFiliere(id: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl +"/filiere/delete/"+id);
  }


  public getpageFilieres(p:number): Observable<any>{
    return this.http.get(this.apiServerUrl+'/filiere/list/'+p);
  }
  getErrorMessage(field:string,error:any):string{
    if(error['required']){
      return field+" is Required";
    }
    else
      return "" ;
  }

  public chercherFiliere(k:string,p:number,s:number):Observable<any>{
    return this.http.get(this.apiServerUrl+'/filiere/chercher?mc='+k+'&page='+p+'&size='+s);

  }


  public getFiliere(id: number):Observable<any> {
    return this.http.get(this.apiServerUrl+'/filiere/findbyid/'+id);
  }
  public getcard():Observable<any> {
    return this.http.get(this.apiServerUrl+'/filiere/card');
  }

  public addChef(filiere: any, sprof: String):Observable<any> {
    return this.http.get( `${this.apiServerUrl}/filiere/add/${sprof}` ,filiere);
  }
}
