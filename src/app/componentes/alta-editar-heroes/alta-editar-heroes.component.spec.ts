import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEditarHeroesComponent } from './alta-editar-heroes.component';

describe('AltaEditarHeroesComponent', () => {
  let component: AltaEditarHeroesComponent;
  let fixture: ComponentFixture<AltaEditarHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEditarHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEditarHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
