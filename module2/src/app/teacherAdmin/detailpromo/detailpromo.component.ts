import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Promotion} from "../../Models/Promotions";
import {PromotionService} from "../../services/promotion.service";
import {Niveau} from "../../Models/niveau";
import {Module} from "../../Models/Module";
import {SemestreService} from "../../services/semestre.service";
import {Student} from "../../Models/student";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";





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
  public selection = new SelectionModel<Student>(true, []);
  displayedColumns: string[] = ['select','id','username','password','selected','cne'];



  constructor(private ro:ActivatedRoute,private ps:PromotionService,private ss:SemestreService) { }

  ngOnInit(): void {
    this.promoid=this.ro.snapshot.params['id'];
    this.ps.getPromo(this.promoid).subscribe({
      next:(data)=>{
        this.promotion=data;
      }
    });
    this.ps.getNiveaux(this.promoid).subscribe({
      next:(data)=>{
        this.niveaux=data;
      }
    });
    this.ps.getAllStudnets(this.promoid).subscribe({
      next:(data)=>{
        this.etudiants=data;

        this.dataSource=new MatTableDataSource<Student>(this.etudiants);

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
}
