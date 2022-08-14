import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliereTemplateComponent } from './filiere-template.component';

describe('FiliereTemplateComponent', () => {
  let component: FiliereTemplateComponent;
  let fixture: ComponentFixture<FiliereTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliereTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliereTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
