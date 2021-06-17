import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapasComplementaresComponent } from './etapas-complementares.component';

describe('EtapasComplementaresComponent', () => {
  let component: EtapasComplementaresComponent;
  let fixture: ComponentFixture<EtapasComplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapasComplementaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapasComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
