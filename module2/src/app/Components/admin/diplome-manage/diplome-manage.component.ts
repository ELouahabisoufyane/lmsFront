import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DiplomeService} from "../../../services/diplome.service";
import {Diplome} from "../../../Models/Diplome";

@Component({
  selector: 'app-diplome-manage',
  templateUrl: './diplome-manage.component.html',
  styleUrls: ['./diplome-manage.component.css']
})
export class DiplomeManageComponent implements OnInit {
  diplomeForm:FormGroup;
  updateDiplomeForm:FormGroup;
  diplome:Diplome;
  diplomes:Diplome[];
  constructor(private fb:FormBuilder,private ds:DiplomeService) { }

  ngOnInit(): void {
    this.diplomeForm=this.fb.group({
      id:this.fb.control(null),
      typeDiplome:this.fb.control("",Validators.required),
      indece:this.fb.control(null),
    })
    this.updateDiplomeForm=this.fb.group({
      id:this.fb.control(null),
      typeDiplome:this.fb.control("",Validators.required),
      indece:this.fb.control(null),
    })
    this.handlegetAll();
  }
  handleAddDiplome(){
    this.diplome=this.diplomeForm.value;
    this.ds.addOne(this.diplome).subscribe(
      {
        next:(data)=>{
          console.log(this.diplome);
          alert(" addes sucessfuly");
        }
      }
    )
  }
  handlegetAll(){
    this.ds.getAll().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.diplomes=data;
        }
      }
    )
  }
  refresh() {
    this.ngOnInit();
  }
  handleDelete(id: number) {
    this.ds.DeleteOne(id).subscribe({
      next:(data)=>{
        this.ngOnInit();
      }
    });
  }

  handleUpdate(id: number) {
    this.ngOnInit()
  }
  handleUpdateDiplome() {
    this.diplome=this.updateDiplomeForm.value;
    console.log(this.updateDiplomeForm.value)
    this.ds.addOne(this.diplome).subscribe({
      next:(data)=>{
        this.ngOnInit();
      }
    });
  }
  passDiplome(id: number) {
    this.diplomes.forEach((d)=>{
      if(d.id==id){
        this.updateDiplomeForm=this.fb.group({
          id:this.fb.control(d.id),
          typeDiplome:this.fb.control(d.typeDiplome,Validators.required),
          indece:this.fb.control(d.indece),
        })
      }
    })
  }
}
