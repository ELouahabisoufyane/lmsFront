import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthentificationserviceService} from "../../../services/authentificationservice.service";



@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor(public auths:AuthentificationserviceService ,private route: Router) { }

  ngOnInit(): void {
  }
  handlelogout(){
    this.auths.logout();
  }
}
