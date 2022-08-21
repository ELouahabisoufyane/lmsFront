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
  public addAnnonce(c: string): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiServerUrl+"/Annonce/add/"+ c);
  }
  public getAllAnnonce():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.apiServerUrl+"/annonce/list");
  }

}
