import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Diplome} from "../Models/Diplome";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {
 private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) {
  }
  addOne(d:Diplome) :Observable<Diplome>{
    return this.http.post<Diplome>(this.apiServerUrl+"/diplome/addDiplome",d);
  }
  DeleteOne(id:number) :Observable<any>{
    return this.http.delete<void>(this.apiServerUrl+"/diplome/deleteDiplome/"+id);
  }
  updateOne(d:Diplome) :Observable<Diplome>{
    return this.http.put<Diplome>(this.apiServerUrl+"/diplome/updateDiplome",d);
  }
  getAll() :Observable<Diplome[]>{
    return this.http.get<Diplome[]>(this.apiServerUrl+"/diplome/getAll");
  }
}
