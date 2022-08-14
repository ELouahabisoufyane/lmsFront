import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {Teacher} from "../../../../Models/teacher";
import {FiliereService} from "../../../../services/filiere.service";
import {ProfService} from "../../../../services/prof.service";


@Component({
  selector: 'app-new-filiere',
  templateUrl: './new-filiere.component.html',
  styleUrls: ['./new-filiere.component.css']
})
export class NewFiliereComponent implements OnInit {

  filiereForm:FormGroup;
  chef: any;
  profs: Teacher[];


  constructor(private fb:FormBuilder,public c:FiliereService,private pr:ProfService,private r:Router) { }

  ngOnInit(): void {
    this.pr.getProfs().subscribe(
      {
        next:(data)=>{
          this.profs=data;
        }
      }
    )

    this.filiereForm=this.fb.group({

      titre :this.fb.control(null,[Validators.required]),







    });}





  handleaddFiliere(){
    let cl=this.filiereForm.value;

    this.c.addFiliere(cl,this.chef).subscribe(
      {
        next:(data)=>{
          alert("Filiere added succesfully");
          this.filiereForm.reset();
        },
        error:err=>{
          console.log("eeeeeeee");
        }
      }
    )
  }
  annuler() {
    this.r.navigateByUrl("/admin/filiere")
  }

}
