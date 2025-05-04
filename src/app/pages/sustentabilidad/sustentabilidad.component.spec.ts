import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentabilidadComponent } from './sustentabilidad.component';

describe('SustentabilidadComponent', () => {
  let component: SustentabilidadComponent;
  let fixture: ComponentFixture<SustentabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustentabilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustentabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
