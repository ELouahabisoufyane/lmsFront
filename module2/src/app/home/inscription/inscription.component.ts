import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Filiere} from "../../Models/filiere";
import {Student} from "../../Models/student";
import {map, Observable} from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";
import {InscriptionService} from "../../services/inscription.service";
import {StepperOrientation} from "@angular/cdk/stepper";
import {Diplome} from "../../Models/Diplome";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  Diplomes!:Diplome[];
  filieres!:Filiere[];
  student=new Student();
  firstFormGroup! :FormGroup;
  secondFormGroup!:FormGroup
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,private IS:InscriptionService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.firstFormGroup=this.formBuilder.group({
      idFiliere:this.formBuilder.control(null,Validators.required),
    
    })
    this.secondFormGroup=this.formBuilder.group({
      id:this.formBuilder.control(null),
      username:this.formBuilder.control("",Validators.required),
      password:this.formBuilder.control("",Validators.required),
      cne:this.formBuilder.control("",Validators.required)
    })


  }

  ngOnInit(): void {
    this.handleDiplomes();
  }
  handleFilieres(idDiplome:number){
    this.IS.getFilieres(idDiplome).subscribe({
      next:(data)=>{
        this.filieres=data;
        console.log(this.filieres);
      }
    })
  }
  handleDiplomes(){
    this.IS.getAllDiplome().subscribe({
      next:(data)=>{
        this.Diplomes=data;
        console.log(this.Diplomes);
      }
    })
  }
  handleInscrireStudent(){
    this.student=this.secondFormGroup.value;
    this.IS.addStudent(this.student,this.firstFormGroup.value["idFiliere"]).subscribe({
      next:(data)=>{
        console.log(data);
      }
    });
  }


}
