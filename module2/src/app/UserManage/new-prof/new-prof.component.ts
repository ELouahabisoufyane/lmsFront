import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {ProfService} from "../../services/prof.service";


@Component({
  selector: 'app-new-prof',
  templateUrl: './new-prof.component.html',
  styleUrls: ['./new-prof.component.css']
})
export class NewProfComponent implements OnInit {

  profForm:FormGroup;
  rolForm: FormGroup;

  constructor(private fb:FormBuilder,public c:ProfService,private r:Router) { }

  ngOnInit(): void {


    this.profForm=this.fb.group({

      username :this.fb.control(null,[Validators.required]),
      email:this.fb.control(null,[Validators.required]),
      password:this.fb.control(null,[Validators.required]),
      cni:this.fb.control(null),



  });}





  handleadduser(){
    let cl=this.profForm.value;

    this.c.addProf(cl).subscribe(
      {
        next:(data)=>{
          alert("Prof added succesfully");
          this.profForm.reset();
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  annuler() {
    this.r.navigateByUrl("/admin/prof")
  }


}
