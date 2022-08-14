import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {EtudiantService} from "../../../../services/etudiant.service";


@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {

  etudiantForm:FormGroup;


  constructor(private fb:FormBuilder,public c:EtudiantService,private r:Router) { }

  ngOnInit(): void {


    this.etudiantForm=this.fb.group({

      username :this.fb.control(null,[Validators.required]),
      email:this.fb.control(null,[Validators.required]),
      password:this.fb.control(null,[Validators.required]),
      cne:this.fb.control(null),




    });}





  handleadduser(){
    let cl=this.etudiantForm.value;

    this.c.addEtudiant(cl).subscribe(
      {
        next:(data)=>{
          alert("Etudiant added succesfully");
          this.etudiantForm.reset();
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  annuler() {
    this.r.navigateByUrl("/admin/etudiant")
  }


}
