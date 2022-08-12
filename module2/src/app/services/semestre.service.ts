import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Module} from "../Models/Module";

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  getpageModules(currentPage: number) {

  }

  retirerModule(id:number):Observable<any>{
    return this.http.delete(this.apiServerUrl+"/Semestre/deleteModule/"+id);
  }
  addModule(ids:number,m:Module,idp:number):Observable<Module>{
    return this.http.post<Module>(this.apiServerUrl+"/Semestre/addModule/"+ids+"/"+idp,m);
  }
}
