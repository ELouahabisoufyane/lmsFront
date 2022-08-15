import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeManageComponent } from './diplome-manage.component';

describe('DiplomeManageComponent', () => {
  let component: DiplomeManageComponent;
  let fixture: ComponentFixture<DiplomeManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
