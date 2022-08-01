import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Classe } from '../model/class.modul';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  classid:number;
  clas!:Classe;
  classForm!:FormGroup;
  constructor(private ro:ActivatedRoute ,public cs:ClassService ,private fb:FormBuilder,private r:Router) {

  }

  ngOnInit(): void {
    this.classid=this.ro.snapshot.params['id'];
    this.cs.getClass(this.classid).subscribe(
      {
        next:(data)=>{

          this.clas=data;
          this.classForm=this.fb.group({
            id :this.fb.control(this.clas.id),
            name:this.fb.control(this.clas.name)
        });
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  handleUpdateclass(){
    let p=this.classForm.value;
    this.cs.updateClasse(p).subscribe(
      {
        next:(data)=>{alert("Class update successfully")},
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  annuler() {
      this.r.navigateByUrl("/admin/classe")
  }
}
