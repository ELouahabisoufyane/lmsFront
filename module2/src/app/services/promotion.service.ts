import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Niveau} from "../Models/niveau";
import {Promotion} from "../Models/Promotions";
import {Student} from "../Models/student";
import {Filiere} from "../Models/filiere";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getNiveaux(id:number):Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.apiServerUrl+'/Promotion/Niveaux/'+id);
  }

  public getPromo(promoid: number):Observable<Promotion> {
    return this.http.get<Promotion>(this.apiServerUrl+'/Promotion/niveau/'+promoid);
  }
  public getAllStudnets(promoid:number):Observable<Student[]>{
    return this.http.get<Student[]>(this.apiServerUrl+'/Promotion/students/'+promoid);
  }

  addInscription(etudiants: Student[], promoid: number):Observable<boolean> {
    return this.http.post<boolean>(this.apiServerUrl+'/Promotion/affecterStudents/'+promoid,etudiants);
  }

  updateEtat(selected: Student[], promoid: number) {
    return this.http.put<boolean>(this.apiServerUrl+'/Promotion/updateEtat/'+promoid,selected);
  }

  public  getFiliere(promoid:number):Observable<Filiere> {
    return this.http.get<Filiere>(this.apiServerUrl+'/Promotion/filiere/'+promoid);

  }
}
