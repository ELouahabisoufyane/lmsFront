import { Component, OnInit } from '@angular/core';
import {FiliereService} from "../../services/filiere.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Promotion} from "../../Models/Promotions";

@Component({
  selector: 'app-detailma-filiere',
  templateUrl: './detailma-filiere.component.html',
  styleUrls: ['./detailma-filiere.component.css']
})
export class DetailmaFiliereComponent implements OnInit {
  public promotions:Promotion[];
  public filiereid: number;
  public lastpromo:Promotion;

  promoid: any;


  constructor(private fs:FiliereService,private ro:ActivatedRoute,private r:Router) { this.ro.params.subscribe(params=>{this.filiereid=params["id"]});}

  ngOnInit(): void {
    this.filiereid=this.ro.snapshot.params['id'];
    this.fs.getAllPromo(this.filiereid).subscribe({
      next:(data)=>{
        this.promotions=data;
        this.lastpromo=data[0];

      }
    });

  }

  handlegotopromo() {

  }
}
