import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfService} from "../../../../services/prof.service";
import {FiliereService} from "../../../../services/filiere.service";
import {Diplome} from "../../../../Models/Diplome";
import {DiplomeService} from "../../../../services/diplome.service";



@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css']
})
export class EditFiliereComponent implements OnInit {
  filiereid:number;
  filiere:any;
  filiereForm:FormGroup;
  profs: any;
  chef: any;
  idDiplome: number;
  diplomes:Diplome[];
  constructor(private ro:ActivatedRoute,private pr:ProfService ,private DS:DiplomeService,public cs:FiliereService ,private fb:FormBuilder,private r:Router) {
  }

  ngOnInit(): void {
    this.filiereid=this.ro.snapshot.params['id'];
    this.cs.getFiliere(this.filiereid).subscribe(
      {
        next:(data)=>{
          this. filiere=data;
          this. filiereForm=this.fb.group({
            id:this.fb.control(this.filiere.id),
            titre :this.fb.control(this.filiere.titre),
          });
        },
        error:err=>{
          console.log(err);
        }
      }
    );
    this.pr.getProfs().subscribe(
      {
        next:(data)=>{
          this.profs=data;
        }
      }
    );

    this.DS.getAll().subscribe({
      next:(data)=>{
        this.diplomes=data;
      }
    })
  }
  handleUpdateFiliere(){
    let p=this.filiereForm.value;
    this.cs.addFiliere(p,this.chef,this.idDiplome).subscribe(
      {
        next:(data)=>{alert(" Filiere update successfully")},
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  annuler() {
    this.r.navigateByUrl("/admin/filiere")
  }


}
