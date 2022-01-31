import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaHospitalComponent } from './criar-conta-hospital.component';

describe('CriarContaHospitalComponent', () => {
  let component: CriarContaHospitalComponent;
  let fixture: ComponentFixture<CriarContaHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarContaHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarContaHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
