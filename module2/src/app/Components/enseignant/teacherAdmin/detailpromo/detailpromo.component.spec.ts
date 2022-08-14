import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpromoComponent } from './detailpromo.component';

describe('DetailpromoComponent', () => {
  let component: DetailpromoComponent;
  let fixture: ComponentFixture<DetailpromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
