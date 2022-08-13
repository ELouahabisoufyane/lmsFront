import { Component, OnInit } from '@angular/core';
import {AuthentificationserviceService} from "../../services/authentificationservice.service";
import {Student} from "../../Models/student";
import {EtudiantService} from "../../services/etudiant.service";
import {Module} from "../../Models/Module";
import {Promotion} from "../../Models/Promotions";
import {Niveau} from "../../Models/niveau";
import {NiveauService} from "../../services/niveau.service";
import {PromotionService} from "../../services/promotion.service";
import {Filiere} from "../../Models/filiere";

@Component({
  selector: 'app-modules-inscris',
  templateUrl: './modules-inscris.component.html',
  styleUrls: ['./modules-inscris.component.css']
})
export class ModulesInscrisComponent implements OnInit {
  etudiant:any;
  modules:Array<Module>;
  promotion:Promotion;
  niveaux:Niveau[];
  filiere: Filiere;
  constructor(public auths:AuthentificationserviceService,private es:EtudiantService,private ps:PromotionService) {
    this.etudiant=this.auths.authenticatedUser;
  }

  ngOnInit(): void {

      this.es.getPromotion(this.etudiant.id).subscribe({
        next:(data)=>{
          this.promotion=data;
          this.ps.getNiveaux(this.promotion.id).subscribe({
            next:(data)=>{
              this.niveaux=data;
            }
          });
          this.ps.getFiliere(this.promotion.id).subscribe({
            next:(data)=>{
              this.filiere=data;
            }
          });
        }
      });


  }

}
