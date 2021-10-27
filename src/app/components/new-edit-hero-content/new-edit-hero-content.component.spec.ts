import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditHeroContentComponent } from './new-edit-hero-content.component';

describe('NewEditHeroContentComponent', () => {
  let component: NewEditHeroContentComponent;
  let fixture: ComponentFixture<NewEditHeroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditHeroContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditHeroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
