import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditHeroComponent } from './new-edit-hero.component';

describe('NewEditHeroComponent', () => {
  let component: NewEditHeroComponent;
  let fixture: ComponentFixture<NewEditHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
