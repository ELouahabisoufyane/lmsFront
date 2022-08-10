import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Filiere} from "../Models/filiere";
import {Niveau} from "../Models/niveau";
import {Student} from "../Models/student";
import {Diplome} from "../Models/Diplome";



@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  filiereUrl!:string;
  studentUrl!:string;
  diplomeUrl: string;

  constructor(private http:HttpClient,) {
    this.studentUrl="http://localhost:8080/etudiant"
    this.diplomeUrl="http://localhost:8080/diplome"
  }
  getFilieres(idDiplome:number):Observable<Filiere[]>{
    return this.http.get<Filiere[]>(this.diplomeUrl+"/filieres/"+idDiplome);
  }
  getAllDiplome():Observable<Diplome[]>{
    return this.http.get<Diplome[]>(this.diplomeUrl+"/getAll");
  }
  addStudent(s:Student,idFiliere?:number){
    return this.http.post<Student>(this.studentUrl+"/add/" +idFiliere,s);
  }

}
