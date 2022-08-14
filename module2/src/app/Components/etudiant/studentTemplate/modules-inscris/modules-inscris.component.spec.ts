import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesInscrisComponent } from './modules-inscris.component';

describe('ModulesInscrisComponent', () => {
  let component: ModulesInscrisComponent;
  let fixture: ComponentFixture<ModulesInscrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesInscrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesInscrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
