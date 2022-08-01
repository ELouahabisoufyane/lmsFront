import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User1";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getNiveaux():Observable<any> {
    return this.http.get(this.apiServerUrl+'/niveau/all');
  }

}
