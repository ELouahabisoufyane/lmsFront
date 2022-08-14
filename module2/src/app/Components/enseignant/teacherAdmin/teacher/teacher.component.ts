import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationserviceService} from "../../../../services/authentificationservice.service";
import {ProfService} from "../../../../services/prof.service";
import {Filiere} from "../../../../Models/filiere";



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
   profid: number;
   filiere:Filiere;
   modules:Array<any>;

  constructor(public auths:AuthentificationserviceService,private ro:ActivatedRoute,public prof:ProfService
      ,private r:Router) { }

  ngOnInit(): void {
    this.profid=this.ro.snapshot.params['id'];
    this.prof.getFiliere(this.profid).subscribe(
      {
        next:(data)=>{
          this.filiere=data;

    }

      }
    )
  }

  handlelogout() {
    this.auths.logout();
  }

  handleConsulterFiliere() {
    this.r.navigateByUrl("/teacher/detailmaFiliere/"+this.filiere.id)
  }
}
