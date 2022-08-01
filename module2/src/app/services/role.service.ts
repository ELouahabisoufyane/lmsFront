import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../model/Role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }


  public addRole(r:Role): Observable<Role> {
    return this.http.post<Role>(`${this.apiServerUrl}/role/add`,r);
  }

  public getRole(): Observable<Role> {
    return this.http.get<Role>(`${this.apiServerUrl}/role/get`);
  }
}
