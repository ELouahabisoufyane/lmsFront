import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ClasseComponent } from './classe/classe.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { AuthenticationGuard } from './guards/authentication.guard';

import { LoginComponent } from './login/login.component';
import { NewClassComponent } from './new-class/new-class.component';

import {ProfesseurComponent} from "./UserManage/professeur/professeur.component";
import {EtudiantComponent} from "./UserManage/etudiant/etudiant.component";
import {AdminComponent} from "./UserManage/admin/admin.component";

import {NewProfComponent} from "./UserManage/new-prof/new-prof.component";
import {UserComponent} from "./UserManage/user/user.component";
import {EditProfComponent} from "./UserManage/edit-prof/edit-prof.component";
import {EditEtudiantComponent} from "./UserManage/edit-etudiant/edit-etudiant.component";
import {NewEtudiantComponent} from "./UserManage/new-etudiant/new-etudiant.component";
import {EditAdminComponent} from "./UserManage/edit-admin/edit-admin.component";
import {NewAdminComponent} from "./UserManage/new-admin/new-admin.component";
import {FiliereService} from "./services/filiere.service";
import {EditFiliereComponent} from "./FiliereRepo/edit-filiere/edit-filiere.component";
import {NewFiliereComponent} from "./FiliereRepo/new-filiere/new-filiere.component";
import {FiliereComponent} from "./FiliereRepo/filiere/filiere.component";
import {FiliereTemplateComponent} from "./FiliereRepo/filiere-template/filiere-template.component";
import {DetailNiveauComponent} from "./FiliereRepo/detail-niveau/detail-niveau.component";
import {NavebarComponent} from "./home/navebar/navebar.component";
import {AboutComponent} from "./home/about/about.component";
import {HomeComponent} from "./home/home/home.component";
import {InscriptionComponent} from "./home/inscription/inscription.component";

const routes: Routes = [
  {
    path: "", redirectTo: "index", pathMatch: 'full'
  },
  {
    path: "index", component: NavebarComponent, children: [
      {
        path: "", redirectTo: "home", pathMatch: 'full'
      },
      {
        path: "home", component: HomeComponent
      },
      { path: "filiere", component: FiliereComponent },
      { path: "about", component: AboutComponent },
      {path: "inscription",component:InscriptionComponent},
    ]
  },
  {path: "login",component:LoginComponent},

  {path: "admin",component:AdminTemplateComponent,children:[

     {path: "classe",component:ClasseComponent},
     {path: "newClass",component:NewClassComponent},
     {path: "editClass/:id",component:EditClassComponent},
      {path: "user",component:UserComponent},
      {path: "filiere",component:FiliereComponent},
      {path: "prof",component:ProfesseurComponent},{path: "etudiant",component:EtudiantComponent},
      {path: "adminN",component:AdminComponent},
      {path: "editprof/:id",component:EditProfComponent},
      {path: "newprof",component:NewProfComponent},
      {path: "editetudiant/:id",component:EditEtudiantComponent},
      {path: "newetudiant",component:NewEtudiantComponent},
      {path: "editadmin/:id",component:EditAdminComponent},
      {path: "newadmin",component:NewAdminComponent},
      {path: "ftemplate/:id",component:FiliereTemplateComponent},
      {path: "detailn/:id",component:DetailNiveauComponent},
      {path: "editfiliere/:id",component:EditFiliereComponent},
      {path: "newfiliere",component:NewFiliereComponent}
  ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
