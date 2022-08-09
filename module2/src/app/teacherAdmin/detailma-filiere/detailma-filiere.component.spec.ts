import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmaFiliereComponent } from './detailma-filiere.component';

describe('DetailmaFiliereComponent', () => {
  let component: DetailmaFiliereComponent;
  let fixture: ComponentFixture<DetailmaFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmaFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmaFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
