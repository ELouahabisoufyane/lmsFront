import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";

import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

import {MatListModule} from "@angular/material/list";

import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ModulesInscrisComponent} from "./Components/etudiant/studentTemplate/modules-inscris/modules-inscris.component";
import {NavbarComponent} from "./Components/etudiant/studentTemplate/navbar/navbar.component";
import {DetailpromoComponent} from "./Components/enseignant/teacherAdmin/detailpromo/detailpromo.component";
import {SidenavComponent} from "./Components/sidenav/sidenav.component";
import {HometComponent} from "./Components/enseignant/teacherAdmin/homet/homet.component";
import {FiliereListComponent} from "./Components/admin/filiere-list/filiere-list.component";
import {TeacherComponent} from "./Components/enseignant/teacherAdmin/teacher/teacher.component";
import {InscriptionComponent} from "./Components/admin/home/inscription/inscription.component";
import {NavebarComponent} from "./Components/admin/home/navebar/navebar.component";
import {AboutComponent} from "./Components/admin/home/about/about.component";
import {DetailNiveauComponent} from "./Components/admin/FiliereRepo/detail-niveau/detail-niveau.component";
import {FiliereTemplateComponent} from "./Components/admin/FiliereRepo/filiere-template/filiere-template.component";
import {EditFiliereComponent} from "./Components/admin/FiliereRepo/edit-filiere/edit-filiere.component";
import {NewFiliereComponent} from "./Components/admin/FiliereRepo/new-filiere/new-filiere.component";
import {FiliereComponent} from "./Components/admin/FiliereRepo/filiere/filiere.component";
import {EditAdminComponent} from "./Components/admin/UserManage/edit-admin/edit-admin.component";
import {NewAdminComponent} from "./Components/admin/UserManage/new-admin/new-admin.component";
import {EditEtudiantComponent} from "./Components/admin/UserManage/edit-etudiant/edit-etudiant.component";
import {NewEtudiantComponent} from "./Components/admin/UserManage/new-etudiant/new-etudiant.component";
import {EditProfComponent} from "./Components/admin/UserManage/edit-prof/edit-prof.component";
import {UserComponent} from "./Components/admin/UserManage/user/user.component";
import {NewProfComponent} from "./Components/admin/UserManage/new-prof/new-prof.component";
import {AdminComponent} from "./Components/admin/UserManage/admin/admin.component";
import {EtudiantComponent} from "./Components/admin/UserManage/etudiant/etudiant.component";
import {ProfesseurComponent} from "./Components/admin/UserManage/professeur/professeur.component";
import {EditClassComponent} from "./Components/admin/ClassManger/edit-class/edit-class.component";
import {ClasseComponent} from "./Components/admin/ClassManger/classe/classe.component";
import {AdminTemplateComponent} from "./Components/admin/admin-template/admin-template.component";
import {NewClassComponent} from "./Components/admin/ClassManger/new-class/new-class.component";
import {FooterComponent} from "./Components/admin/footer/footer.component";
import {LoginComponent} from "./Components/login/login.component";
import {HomeComponent} from "./Components/admin/home/home/home.component";
import {DiplomeManageComponent} from "./Components/admin/diplome-manage/diplome-manage.component";
import {MatMenuModule} from "@angular/material/menu";
import {
  DetailElementModuleComponent
} from "./Components/enseignant/teacherAdmin/detail-element-module/detail-element-module.component";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";

import 'froala-editor/js/plugins.pkgd.min.js';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    AdminTemplateComponent,
    ClasseComponent,
    NewClassComponent,
    EditClassComponent,
    FooterComponent,

    ProfesseurComponent,
    EtudiantComponent,
    AdminComponent,

    NewProfComponent,
     UserComponent,
     EditProfComponent,
     NewEtudiantComponent,
     EditEtudiantComponent,
     NewAdminComponent,
     EditAdminComponent,
     FiliereComponent,
     NewFiliereComponent,
     EditFiliereComponent,
     FiliereTemplateComponent,
     DetailNiveauComponent,
     AboutComponent,
     NavebarComponent,
    InscriptionComponent,

    TeacherComponent,
    FiliereListComponent,

    HometComponent,
    SidenavComponent,
    DetailpromoComponent,
    NavbarComponent,
    ModulesInscrisComponent,
    DiplomeManageComponent,
    DetailElementModuleComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,

    MatIconModule,
    MatExpansionModule,
    MatSnackBarModule,

    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
