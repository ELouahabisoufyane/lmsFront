import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Element} from "../Models/Element";
import {Axe} from "../Models/axe";
import {Teacher} from "../Models/teacher";
import {Student} from "../Models/student";


@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) {
  }
  public deleteElement(id:number):Observable<void> {
    return this.http.delete<void>(this.apiServerUrl+"/element/removeElement/"+id);
  }
  public  addElement(e: Element, idModule: number, chef: number):Observable<Element> {
    return this.http.post<Element>(this.apiServerUrl+"/element/addElement/"+idModule+"/"+chef,e);
  }
  public  addTheme(e: Axe, idElement: number):Observable<Axe> {
    return this.http.post<Axe>(this.apiServerUrl+"/element/addAxe/"+idElement,e);
  }
  public  getAllThemes(idElement: number):Observable<Axe[]> {
    return this.http.get<Axe[]>(this.apiServerUrl+"/element/getAxesByElement/"+idElement);
  }

  public getElement(idElement: number):Observable<Element> {
    return this.http.get<Element>(this.apiServerUrl+"/element/getElement/"+idElement);
  }
  public getProf(idElement:number):Observable<Teacher>{
    return this.http.get<Teacher>(this.apiServerUrl+"/element/getProf/"+idElement);
  }

  getEtudiants(idElement: number):Observable<Student[]> {
    return this.http.get<Student[]>(this.apiServerUrl+"/element/getEtudiants/"+idElement);

  }
}
