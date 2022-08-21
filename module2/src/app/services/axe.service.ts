import { Injectable } from '@angular/core';
import {Axe} from "../Models/axe";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AxeService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) {
  }
  public  addAxe(e: Axe, idAxe: number):Observable<Axe> {
    return this.http.post<Axe>(this.apiServerUrl+"/Axe/addAxe/"+idAxe,e);
  }
  public  getAxes(idAxe: number):Observable<Axe[]> {
    return this.http.get<Axe[]>(this.apiServerUrl+"/Axe/getAxes/"+idAxe);
  }
}
