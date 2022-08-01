import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor(public auths:AuthenticationService ,private route: Router,public au:AuthenticationService) { }

  ngOnInit(): void {
  }
  handlelogout(){
    this.auths.logout().subscribe({

      next:()=>{
        this.route.navigateByUrl("/login");
      }
    }

    )
  }
}
