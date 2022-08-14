import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Filiere} from "../Models/filiere";
import {Niveau} from "../Models/niveau";
import {Promotion} from "../Models/Promotions";

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }




  public addFiliere(c: Filiere, chef: number ,idDiplome:number): Observable<Filiere> {
    return this.http.post<Filiere>(`${this.apiServerUrl}/filiere/add/${chef}/${idDiplome}`, c);
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
  public getNiveaux(id:number) :Observable<Niveau[]>{
    return this.http.get<Niveau[]>(this.apiServerUrl+"/filiere/get/"+id+"/Niveaux");
  }
  public getAllPromo(id:number):Observable<Promotion[]>{
    return this.http.get<Promotion[]>(this.apiServerUrl+"/filiere/Promotions/"+id);
  }
  public addPromo(id:number):Observable<Filiere>{
    return this.http.get<Filiere>(this.apiServerUrl+"/filiere/addPromo/"+id);
  }
}
