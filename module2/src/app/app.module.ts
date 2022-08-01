import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { ClasseComponent } from './classe/classe.component';
import { NewClassComponent } from './new-class/new-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { FooterComponent } from './footer/footer.component';

import { ProfesseurComponent } from './UserManage/professeur/professeur.component';
import { EtudiantComponent } from './UserManage/etudiant/etudiant.component';
import { AdminComponent } from './UserManage/admin/admin.component';

import { NewProfComponent } from './UserManage/new-prof/new-prof.component';
import { UserComponent } from './UserManage/user/user.component';
import { EditProfComponent } from './UserManage/edit-prof/edit-prof.component';
import { NewEtudiantComponent } from './UserManage/new-etudiant/new-etudiant.component';
import { EditEtudiantComponent } from './UserManage/edit-etudiant/edit-etudiant.component';
import { NewAdminComponent } from './UserManage/new-admin/new-admin.component';
import { EditAdminComponent } from './UserManage/edit-admin/edit-admin.component';
import { FiliereComponent } from './FiliereRepo/filiere/filiere.component';
import { NewFiliereComponent } from './FiliereRepo/new-filiere/new-filiere.component';
import { EditFiliereComponent } from './FiliereRepo/edit-filiere/edit-filiere.component';
import { FiliereTemplateComponent } from './FiliereRepo/filiere-template/filiere-template.component';
import { DetailNiveauComponent } from './FiliereRepo/detail-niveau/detail-niveau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";


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

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTabsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
