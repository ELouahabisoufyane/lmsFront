import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Filiere} from "../../Models/filiere";
import {Student} from "../../Models/student";
import {map, Observable} from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";
import {InscriptionService} from "../../services/inscription.service";
import {StepperOrientation} from "@angular/cdk/stepper";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  filieres!:Filiere[];
  student=new Student();
  firstFormGroup! :FormGroup;
  secondFormGroup!:FormGroup
  nextFilieres!:Filiere[];
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,private IS:InscriptionService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.firstFormGroup=this.formBuilder.group({
      idFiliere:this.formBuilder.control(null,Validators.required)
    })
    this.secondFormGroup=this.formBuilder.group({
      id:this.formBuilder.control(null),
      username:this.formBuilder.control("",Validators.required),
      password:this.formBuilder.control("",Validators.required),
      cne:this.formBuilder.control("",Validators.required)
    })


  }

  ngOnInit(): void {
    this.handleFilieres();
  }


  handleNextFiliere(s:string){
    this.nextFilieres=this.filieres.filter((e)=>{
      if (e.deplome==s) {
        return e;
      }
      return null;
    })
    console.log(this.nextFilieres);
  }

  handleFilieres(){
    this.IS.getAllFiliere().subscribe({
      next:(data)=>{
        this.filieres=data;
        console.log(this.filieres);
      }
    })
  }

  handleInscrireStudent(){

    this.student=this.secondFormGroup.value;
    this.IS.getNiveax(this.firstFormGroup.value["idFiliere"]).subscribe({
      next:(data)=>{
        let id= data.find((e)=>{
          if (e.level==1) {
            return e;
          }
          return null;
        })?.id;
        console.log(id);
        console.log(this.student);
        this.IS.addStudent(this.student,id).subscribe({
          next:(data)=>{
            console.log(data);
          }
        });
      }
    })
  }

}
