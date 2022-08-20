import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailElementModuleComponent } from './detail-element-module.component';

describe('DetailElementModuleComponent', () => {
  let component: DetailElementModuleComponent;
  let fixture: ComponentFixture<DetailElementModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailElementModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailElementModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
