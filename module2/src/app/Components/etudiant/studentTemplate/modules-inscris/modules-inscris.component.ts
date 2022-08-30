import { Component, OnInit } from '@angular/core';
import {Module} from "../../../../Models/Module";
import {Promotion} from "../../../../Models/Promotions";
import {Filiere} from "../../../../Models/filiere";
import {Niveau} from "../../../../Models/niveau";
import {AuthentificationserviceService} from "../../../../services/authentificationservice.service";
import {PromotionService} from "../../../../services/promotion.service";
import {EtudiantService} from "../../../../services/etudiant.service";

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
  windowScrolled = false;


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
              console.log(this.niveaux);
              this.niveaux.sort((a,b)=>a.level>b.level?1:-1);
              console.log(this.niveaux);
              this.niveaux.forEach((a)=>{a.semestres.sort((a,b)=>a.indece>b.indece?1:-1)});
            }
          });
          this.ps.getFiliere(this.promotion.id).subscribe({
            next:(data)=>{
              this.filiere=data;
            }
          });
        }
      });
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });


  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
