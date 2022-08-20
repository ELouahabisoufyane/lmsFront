import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Element} from "../Models/Element";

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
}
