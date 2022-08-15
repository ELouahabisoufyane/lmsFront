import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailpromoComponent} from "./Components/enseignant/teacherAdmin/detailpromo/detailpromo.component";
import {HometComponent} from "./Components/enseignant/teacherAdmin/homet/homet.component";
import {TeacherComponent} from "./Components/enseignant/teacherAdmin/teacher/teacher.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {ModulesInscrisComponent} from "./Components/etudiant/studentTemplate/modules-inscris/modules-inscris.component";
import {NavbarComponent} from "./Components/etudiant/studentTemplate/navbar/navbar.component";
import {NewFiliereComponent} from "./Components/admin/FiliereRepo/new-filiere/new-filiere.component";
import {EditFiliereComponent} from "./Components/admin/FiliereRepo/edit-filiere/edit-filiere.component";
import {DetailNiveauComponent} from "./Components/admin/FiliereRepo/detail-niveau/detail-niveau.component";
import {FiliereTemplateComponent} from "./Components/admin/FiliereRepo/filiere-template/filiere-template.component";
import {NewAdminComponent} from "./Components/admin/UserManage/new-admin/new-admin.component";
import {EditAdminComponent} from "./Components/admin/UserManage/edit-admin/edit-admin.component";
import {NewEtudiantComponent} from "./Components/admin/UserManage/new-etudiant/new-etudiant.component";
import {EditEtudiantComponent} from "./Components/admin/UserManage/edit-etudiant/edit-etudiant.component";
import {NewProfComponent} from "./Components/admin/UserManage/new-prof/new-prof.component";
import {EditProfComponent} from "./Components/admin/UserManage/edit-prof/edit-prof.component";
import {AdminComponent} from "./Components/admin/UserManage/admin/admin.component";
import {ProfesseurComponent} from "./Components/admin/UserManage/professeur/professeur.component";
import {FiliereComponent} from "./Components/admin/FiliereRepo/filiere/filiere.component";
import {EtudiantComponent} from "./Components/admin/UserManage/etudiant/etudiant.component";
import {UserComponent} from "./Components/admin/UserManage/user/user.component";
import {EditClassComponent} from "./Components/admin/ClassManger/edit-class/edit-class.component";
import {NewClassComponent} from "./Components/admin/ClassManger/new-class/new-class.component";
import {ClasseComponent} from "./Components/admin/ClassManger/classe/classe.component";
import {AdminTemplateComponent} from "./Components/admin/admin-template/admin-template.component";
import {LoginComponent} from "./Components/login/login.component";
import {InscriptionComponent} from "./Components/admin/home/inscription/inscription.component";
import {AboutComponent} from "./Components/admin/home/about/about.component";
import {HomeComponent} from "./Components/admin/home/home/home.component";
import {NavebarComponent} from "./Components/admin/home/navebar/navebar.component";




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
      {path: "newfiliere",component:NewFiliereComponent},

  ]},
  {path: "student",component:NavbarComponent,canActivate:[AuthenticationGuard],children:[
      {path: "moduleinscrit",component:ModulesInscrisComponent},

    ]},
  {path: "teacher",component:TeacherComponent,canActivate:[AuthenticationGuard],children:[
      {path: "homet/:id",component:HometComponent},
      {path: "detailpromo/:id",component:DetailpromoComponent}
    ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
