import { Component, OnInit } from '@angular/core';
import {Filiere} from "../../Models/filiere";
import {AuthentificationserviceService} from "../../services/authentificationservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfService} from "../../services/prof.service";
import {Promotion} from "../../Models/Promotions";
import {FiliereService} from "../../services/filiere.service";

@Component({
  selector: 'app-homet',
  templateUrl: './homet.component.html',
  styleUrls: ['./homet.component.css']
})
export class HometComponent implements OnInit {
  profid: number;
  filiere:Filiere;
  modules:Array<any>;
  promotions: Promotion[];
  promo: any;
  private filiereid: any;

  constructor(public auths:AuthentificationserviceService,private ro:ActivatedRoute,public prof:ProfService
    ,private r:Router,private fs :FiliereService) { }

  ngOnInit(): void {
    this.profid=this.ro.snapshot.params['id'];
    this.prof.getFiliere(this.profid).subscribe(
      {
        next:(data)=>{
          this.filiere=data;
          this.filiereid=data.id;
          this.fs.getAllPromo(this.filiereid).subscribe({
            next:(data)=>{
              this.promotions=data;


            }
          });
        }

      }
    );

  }





  handleConsulterPromo(promo: any) {
    this.r.navigateByUrl("/teacher/detailpromo/"+promo);
  }

  handleAddPromotion() {
    this.fs.addPromo(this.filiereid).subscribe({
      next:(data)=>{
        this.ngOnInit();
      }
    })
  }
}
