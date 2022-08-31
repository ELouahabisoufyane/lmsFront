import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Annonce} from "../Models/Annonce";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public addAnnonce(c: Annonce,idElement:number,idUser:number): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiServerUrl+"/Annonce/addAnnonce/"+idElement+"/"+idUser, c);
  }
  public getAllAnnonce(idElement:number):Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.apiServerUrl+"/Annonce/getByElement/"+idElement);
  }
}
