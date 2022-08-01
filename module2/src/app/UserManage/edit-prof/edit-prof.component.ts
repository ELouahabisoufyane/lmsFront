import { Component, OnInit } from '@angular/core';
import {Classe} from "../../model/class.modul";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../services/class.service";
import {User} from "../../model/User1";
import {Role} from "../../model/Role";
import {ProfService} from "../../services/prof.service";

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {

  profid:number;
  prof:User;
  profForm:FormGroup;
  constructor(private ro:ActivatedRoute ,public cs:ProfService ,private fb:FormBuilder,private r:Router) {

  }

  ngOnInit(): void {
    this.profid=this.ro.snapshot.params['id'];
    this.cs.getProf(this.profid).subscribe(
      {
        next:(data)=>{

          this. prof=data;
          this. profForm=this.fb.group({
            type:this.fb.control(this.prof.type),
            id:this.fb.control(this.prof.id),
            username :this.fb.control(this.prof.username),
            email:this.fb.control(this.prof.email),
            password:this.fb.control(this.prof.password),
            cnea:this.fb.control(this.prof.cnea),
            cne:this.fb.control(this.prof.cne),
            cnep:this.fb.control(this.prof.cnep),


          });
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  handleUpdateclass(){
    let p=this. profForm.value;
    this.cs.updateProf(p).subscribe(
      {
        next:(data)=>{alert(" prof update successfully")},
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  annuler() {
    this.r.navigateByUrl("/admin/prof")
  }

}
