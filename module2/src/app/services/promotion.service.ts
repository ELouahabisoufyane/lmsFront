import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Niveau} from "../Models/niveau";
import {Promotion} from "../Models/Promotions";

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
}
