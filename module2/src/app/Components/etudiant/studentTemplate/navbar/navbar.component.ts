import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {AuthentificationserviceService} from "../../../../services/authentificationservice.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public auths:AuthentificationserviceService,private r:Router) { }

  ngOnInit(): void {
    this.r.navigateByUrl("/student/moduleinscrit")
  }
  handlelogout() {
    this.auths.logout();
  }

}
