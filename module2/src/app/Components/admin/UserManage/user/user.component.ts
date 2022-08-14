import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProfesseurComponent} from "../professeur/professeur.component";
import {EtudiantService} from "../../../../services/etudiant.service";
import {ProfService} from "../../../../services/prof.service";
import {AdminService} from "../../../../services/admin.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  prof:any;
  etd: any;
  admi: any;
  constructor(private r :Router,public s:EtudiantService,public p:ProfService,public a:AdminService) { }

  ngOnInit(): void {
    this.s.getcard().subscribe(
      {
        next:(data)=>{
          this.etd=data;
        }
      }
    );
    this.p.getcard().subscribe(
      {
        next:(data)=>{
          this.prof=data;
        }
      }
    );
    this.a.getcard().subscribe(
      {
        next:(data)=>{
          this.admi=data;
        }
      }
    );
  }

  gotoprof() {
    this.r.navigateByUrl("admin/prof")
  }

  gotoad() {
    this.r.navigateByUrl("admin/adminN")
  }

  gotostu() {
    this.r.navigateByUrl("admin/etudiant")
  }
}
