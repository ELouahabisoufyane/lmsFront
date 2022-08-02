import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Student} from "../Models/student";

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getNiveaux():Observable<any> {
    return this.http.get(this.apiServerUrl+'/niveau/all');
  }

  public getStudents(id:number):Observable<Student[]> {
    return this.http.get<Student[]>(this.apiServerUrl+'/niveau/allStudents/'+id);
  }
  public getStudentsDemanded(id:number):Observable<Student[]> {
    return this.http.get<Student[]>(this.apiServerUrl+'/niveau/get/'+id+'/Demanded');
  }
  public getStudentsAffected(id:number):Observable<Student[]> {
    return this.http.get<Student[]>(this.apiServerUrl+'/niveau/get/'+id+'/Affected');
  }
  public getStudentRefused(id:number):Observable<Student[]> {
    return this.http.get<Student[]>(this.apiServerUrl+'/niveau/get/'+id+'/Refused');
  }
}
