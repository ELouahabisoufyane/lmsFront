import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AnnonceService} from "../../../../services/annonce.service";
import {ElementService} from "../../../../services/element.service";
import {Axe} from "../../../../Models/axe";
import {AxeService} from "../../../../services/axe.service";
@Component({
  selector: 'app-detail-element-module',
  templateUrl: './detail-element-module.component.html',
  styleUrls: ['./detail-element-module.component.css']
})
export class DetailElementModuleComponent implements OnInit {
}
