import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FiliereService} from "../../services/filiere.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProfService} from "../../services/prof.service";
import {NiveauService} from "../../services/niveau.service";
import {Niveau} from "../../Models/niveau";

@Component({
  selector: 'app-filiere-template',
  templateUrl: './filiere-template.component.html',
  styleUrls: ['./filiere-template.component.css']
})
export class FiliereTemplateComponent implements OnInit {
  private filiereid: number;
  filiere: any;
  filiereForm:FormGroup;
  profs: any;
  sprof:any;
  niveaux:Niveau[];

  public  message: string;
   newchef: boolean=false;
  constructor(private r:Router,private ni:NiveauService,private ro:ActivatedRoute,public cs:FiliereService,private pr:ProfService ,private fb:FormBuilder) {

  }

  ngOnInit(): void {


    this.filiereid=this.ro.snapshot.params['id'];
    this.cs.getFiliere(this.filiereid).subscribe(
      {
        next:(data)=>{

          this. filiere=data;
  }


});
    this.cs.getNiveaux(this.filiereid).subscribe(
      {
        next:(data)=>{
          this.niveaux=data;
        }
      }
    )
    this.pr.getProfs().subscribe(
      {
        next:(data)=>{
          this.profs=data;
        }
      }
    )

  }


  addchef(fil:any,sprof: any) {

    this.cs.addChef(fil,sprof).subscribe(
      {
        next:(data)=>{

          this.message="Chef added succesfully";
    }
      }
    )

  }

  changer() {
    this.newchef=true;
  }



  gotoEtudiant(id: any) {
    this.r.navigateByUrl("/admin/detailn/"+id);
  }
}
