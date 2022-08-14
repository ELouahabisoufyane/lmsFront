import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Promotion} from "../../../../Models/Promotions";
import {Student} from "../../../../Models/student";
import {Module} from "../../../../Models/Module";
import {Niveau} from "../../../../Models/niveau";
import {Teacher} from "../../../../Models/teacher";
import {PromotionService} from "../../../../services/promotion.service";
import {SemestreService} from "../../../../services/semestre.service";
import {ProfService} from "../../../../services/prof.service";





class Student1 {
  id:number;
  username:string;
  password:string;
  cne:string;
}

@Component({
  selector: 'app-detailpromo',
  templateUrl: './detailpromo.component.html',
  styleUrls: ['./detailpromo.component.css']
})
export class DetailpromoComponent implements OnInit {
  public promoid: number;
  public promotion:Promotion;
  public niveaux:Niveau[];
  modules! :Array<Module>;
  public etudiants:Student[];
  public studentsSelected:Student[];
  dataSource:MatTableDataSource<Student>;
  profs: Teacher[];
  chef: number;
  idSemestre: number;
  module=new Module();
  ModuleForm: FormGroup;
  editForm: FormGroup;

  public selection = new SelectionModel<Student>(true, []);
  displayedColumns: string[] = ['select','id','username','password','selected','cne'];
  moduleid: number;
  constructor(private ro:ActivatedRoute,private ps:PromotionService,private ss:SemestreService,private profS:ProfService,private fb:FormBuilder) {
    this.ModuleForm=this.fb.group({
      id:this.fb.control(null),
      titre:this.fb.control(null),
    });

  }
  ngOnInit(): void {
    this.editForm=this.fb.group({
      id:this.fb.control(this.module.id),
      titre:this.fb.control(this.module.titre),
    });
    this.promoid=this.ro.snapshot.params['id'];
    this.ps.getPromo(this.promoid).subscribe({
      next:(data)=>{
        this.promotion=data;
      }
    });
    this.ps.getNiveaux(this.promoid).subscribe({
      next:(data)=>{
        this.niveaux=data;
        console.log(this.niveaux);
        this.niveaux.sort((a,b)=>a.level>b.level?1:-1);
        console.log(this.niveaux);
        this.niveaux.forEach((a)=>{a.semestres.sort((a,b)=>a.indece>b.indece?1:-1)});
      }
    });
    this.ps.getAllStudnets(this.promoid).subscribe({
      next:(data)=>{
        this.etudiants=data;

        this.dataSource=new MatTableDataSource<Student>(this.etudiants);

      }
    })
    this.profS.getProfs().subscribe({
      next:(data)=>{
        this.profs=data;
      }
    })
  }
  /*handleGetpagemodules(){
    this.ss.getpageModules(this.,this.currentPage).subscribe(
      data=>{
        this.modules=data['content'];
        this.pages=new Array(data['totalPages']);
        this.totalPages=data['totalPages'];
      }
    )
  }*/



  handleInscrire() {
    this.ps.addInscription(this.selection.selected,this.promoid).subscribe(
      {
      next:(data)=>{
          alert("insecription addes succefully");
          this.ngOnInit();
      }
      }
    )
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Student): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  handleRetirer(id: number) {
    this.ss.retirerModule(id).subscribe({
      next:(data)=>{
        this.ngOnInit()
      }
    })
  }
  passSemestre(id:number){
    this.idSemestre=id;
  }
  handleaddFiliere() {

    let mm=this.ModuleForm.value;

    this.ss.addModule(this.idSemestre,mm,this.chef).subscribe({
      next:(data)=>{
        this.ngOnInit();
        this.ModuleForm.reset();
      }
    })
  }

  handleeditModule() {
    let em=this.editForm.value;
    this.ss.addModule(this.idSemestre,em,this.chef).subscribe({
      next:(data)=>{
        alert("Module edit successfully")
        this.ngOnInit();
      }
    })
  }

  passModule(m: Module,id:number) {
    this.passSemestre(id);
    this.module=m;
    this.ngOnInit();
  }
}
