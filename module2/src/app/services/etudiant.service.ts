import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User1";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private t:String="etudiant";
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }




  public addEtudiant(c: any): Observable<any> {
    return this.http.post<any>(this.apiServerUrl+"/etudiant/add/"+this.t, c);
  }
  public updateEtudiant(c: any): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+"/etudiant/update", c);
  }

  public deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl +"/etudiant/delete/"+id);
  }


  public getpageEtudiants(p:number): Observable<any>{
    return this.http.get(this.apiServerUrl+'/etudiant/list/'+p);
  }
  getErrorMessage(field:string,error:any):string{
    if(error['required']){
      return field+" is Required";
    }
    else
      return "" ;
  }

  public chercherEtudiant(k:string,p:number,s:number):Observable<any>{
    return this.http.get(this.apiServerUrl+'/etudiant/chercher?mc='+k+'&page='+p+'&size='+s);

  }


  public getEtudiant(id: number):Observable<any> {
    return this.http.get(this.apiServerUrl+'/etudiant/findbyid/'+id);
  }
  public getcard():Observable<any> {
    return this.http.get(this.apiServerUrl+'/etudiant/card');
  }
}
