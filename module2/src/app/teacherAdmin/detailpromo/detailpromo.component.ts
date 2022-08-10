import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Promotion} from "../../Models/Promotions";
import {PromotionService} from "../../services/promotion.service";
import {Niveau} from "../../Models/niveau";
import {Module} from "../../Models/Module";
import {SemestreService} from "../../services/semestre.service";

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
  currentPage:number=0;
  pagesize:number=6;
  totalPages :number=0;
  pages:Array<any>;
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


}
