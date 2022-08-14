import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Router} from "@angular/router";
import {ClassService} from "../../../../services/class.service";

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {
  classForm!:FormGroup;
  constructor(private fb:FormBuilder,public c:ClassService,private r:Router) { }

  ngOnInit(): void {
    this.classForm=this.fb.group({
        id :null,
        name:this.fb.control(null,[Validators.required])
    });
  }
  handleaddclass(){
    let cl=this.classForm.value;
    this.c.addClasse(cl).subscribe(
      {
        next:(data)=>{
            alert("Class added succesfully");
            this.classForm.reset();
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  annuler() {
    this.r.navigateByUrl("/admin/classe")
  }
}
