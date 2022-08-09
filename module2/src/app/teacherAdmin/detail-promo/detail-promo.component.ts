import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.component.html',
  styleUrls: ['./detail-promo.component.css']
})
export class DetailPromoComponent implements OnInit {
  promoid: any;

  constructor(private ro:ActivatedRoute) { }

  ngOnInit(): void {
    this.promoid=this.ro.snapshot.params['id'];
  }

}
