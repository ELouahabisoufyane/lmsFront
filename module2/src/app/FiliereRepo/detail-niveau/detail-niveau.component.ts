import { Component, OnInit } from '@angular/core';
import {Student} from "../../Models/student";
import {EtudiantService} from "../../services/etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NiveauService} from "../../services/niveau.service";

@Component({
  selector: 'app-detail-niveau',
  templateUrl: './detail-niveau.component.html',
  styleUrls: ['./detail-niveau.component.css']
})
export class DetailNiveauComponent implements OnInit {

  etuDemandes:Student[];
  etuAcceptes:Student[];
  etuRefuses:Student[];
  etds:Student[];
  private niveauid: any;
  constructor(public ns:NiveauService,public es:EtudiantService,private ro:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
    this.niveauid=this.ro.snapshot.params['id'];
    this.ns.getStudents(this.niveauid).subscribe({
      next:(data)=>{
        this.etds=data;
      }
    })
    this.ns.getStudentRefused(this.niveauid).subscribe({
      next:(data)=>{
        this.etuRefuses=data;
      }
    });
    this.ns.getStudentsAffected(this.niveauid).subscribe({
      next:(data)=>{
        this.etuAcceptes=data;
      }
    });
    this.ns.getStudentsDemanded(this.niveauid).subscribe({
      next:(data)=>{
        this.etuDemandes=data;
      }
    });

  }

  setAccepted(etu:any ) {
    this.es.setAccepted(etu).subscribe({
      next:(data)=>{
        this.ngOnInit();

      }
    });

  }

  setRefused(e: Student) {
    this.es.setRefused(e).subscribe({
      next:(data)=>{
        this.ngOnInit();

      }
    });
  }
}
