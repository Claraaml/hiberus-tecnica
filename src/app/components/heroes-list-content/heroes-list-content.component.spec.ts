import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListContentComponent } from './heroes-list-content.component';

describe('HeroesListContentComponent', () => {
  let component: HeroesListContentComponent;
  let fixture: ComponentFixture<HeroesListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
