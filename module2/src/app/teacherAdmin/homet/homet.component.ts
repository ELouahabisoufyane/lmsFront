import { Component, OnInit } from '@angular/core';
import {Filiere} from "../../Models/filiere";
import {AuthentificationserviceService} from "../../services/authentificationservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfService} from "../../services/prof.service";

@Component({
  selector: 'app-homet',
  templateUrl: './homet.component.html',
  styleUrls: ['./homet.component.css']
})
export class HometComponent implements OnInit {
  profid: number;
  filiere:Filiere;
  modules:Array<any>;

  constructor(public auths:AuthentificationserviceService,private ro:ActivatedRoute,public prof:ProfService
    ,private r:Router) { }

  ngOnInit(): void {
    this.profid=this.ro.snapshot.params['id'];
    this.prof.getFiliere(this.profid).subscribe(
      {
        next:(data)=>{
          this.filiere=data;

        }

      }
    )
  }

  handlelogout() {
    this.auths.logout();
  }

  handleConsulterFiliere(fid:number) {
    this.r.navigateByUrl("/teacher/detailmaFiliere/"+fid)
  }
}
