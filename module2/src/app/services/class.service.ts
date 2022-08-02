import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getAllclasses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/classe/all`);
  }
  public getClass(id:number):Observable<any>{

    return this.http.get(`${this.apiServerUrl}/classe/findbyid/${id}`);
  }
  public addClasse(c: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/classe/add`, c);
  }

  public updateClasse(c: any): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/classe/update`, c);
  }

  public deleteClasse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/classe/delete/${id}`);
  }
  public chercherClass(k:string,p:number,s:number):Observable<any>{
    return this.http.get(this.apiServerUrl+'/classe/chercher?mc='+k+'&page='+p+'&size='+s);

  }
  public getpageClasses(p:number): Observable<any>{
    return this.http.get(this.apiServerUrl+'/classe/list/'+p);
  }
  getErrorMessage(field:string,error:any):string{
    if(error['required']){
      return field+" is Required";
    }
    else
      return "" ;
  }




}
/*

public chercherClass(k:string,p:number,s:number):Observable<PageC>{
   let cl=this.classes.filter(c=>c.cname.includes(k));
   let i=p*s;
   let toPages=  ~~(cl.length/s);
   if((this.classes.length % s) !=0 )
   toPages++;
   let pageCs=cl.slice(i,i+s);
   return of({classes:pageCs,page:p,size:s,totalPages:toPages});

}
public getpageClasses(p:number,s:number):Observable<PageC>{
 let i=p*s;
 let toPages=  ~~(this.classes.length/s);
 if((this.classes.length % s) !=0 )
   toPages++;
 let pageCs=this.classes.slice(i,i+s);
 return of({classes:pageCs,page:p,size:s,totalPages:toPages});
}
public addnewclass(c:Classe):Observable<Classe>{
 this.classes.push(c);
 return of(c);
}
public getClass(id:number):Observable<Classe>{
let cc=this.classes.find(p=>p.id==id);
if(cc==undefined)
return throwError(()=>new Error("Class not found"));
else
return of(cc);
}
getErrorMessage(field:string,error:any):string{
if(error['required']){
 return field+" is Required";
}
else
return "" ;
}
public updateClass(c:Classe):Observable<Classe>{
this.classes=this.classes.map(p=>(p.id==c.id)?c:p);
return of(c);

}
}*/
