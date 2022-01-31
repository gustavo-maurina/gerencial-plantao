import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaMedicoComponent } from './criar-conta-medico.component';

describe('CriarContaMedicoComponent', () => {
  let component: CriarContaMedicoComponent;
  let fixture: ComponentFixture<CriarContaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarContaMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarContaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
