import { Component, OnInit } from '@angular/core';
import {AuthentificationserviceService} from "../../services/authentificationservice.service";
import {Router} from "@angular/router";

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
