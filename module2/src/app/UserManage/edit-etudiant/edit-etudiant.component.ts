import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User1";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EtudiantService} from "../../services/etudiant.service";


@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  etudiantid:number;
  etudiant:User;
  etudiantForm:FormGroup;
  constructor(private ro:ActivatedRoute ,public cs:EtudiantService ,private fb:FormBuilder,private r:Router) {

  }

  ngOnInit(): void {
    this.etudiantid=this.ro.snapshot.params['id'];
    this.cs.getEtudiant(this.etudiantid).subscribe(
      {
        next:(data)=>{

          this. etudiant=data;
          this. etudiantForm=this.fb.group({
            type:this.fb.control(this.etudiant.type),
            id:this.fb.control(this.etudiant.id),
            username :this.fb.control(this.etudiant.username),
            email:this.fb.control(this.etudiant.email),
            password:this.fb.control(this.etudiant.password),
            cnea:this.fb.control(this.etudiant.cnea),
            cne:this.fb.control(this.etudiant.cne),
            cnep:this.fb.control(this.etudiant.cnep),


          });
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  handleUpdateetudiant(){
    let p=this.etudiantForm.value;
    this.cs.updateEtudiant(p).subscribe(
      {
        next:(data)=>{alert(" Etudiant update successfully")},
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  annuler() {
    this.r.navigateByUrl("/admin/etudiant")
  }


}
