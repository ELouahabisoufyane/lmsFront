import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularEditorConfig} from "@kolkov/angular-editor";





@Component({
  selector: 'app-detail-element-module',
  templateUrl: './detail-element-module.component.html',
  styleUrls: ['./detail-element-module.component.css']
})
export class DetailElementModuleComponent implements OnInit {
   elementid:number;
   afficher:boolean=false
  name = 'Angular 6';
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };


  constructor(private ro:ActivatedRoute) { }

  ngOnInit(): void {
    this.elementid=this.ro.snapshot.params['id'];

  }





  handleAfficher() {
    if(this.afficher==false){
      this.afficher=true;
    }
    else {
      this.afficher=false;
    }
  }
}
