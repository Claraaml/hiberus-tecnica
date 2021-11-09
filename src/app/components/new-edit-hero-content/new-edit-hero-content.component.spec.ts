import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { NewEditHeroContentComponent } from './new-edit-hero-content.component';

describe('Heroes List Content Component', () => {

    let component: NewEditHeroContentComponent;
    let fixture: ComponentFixture<NewEditHeroContentComponent>;
    let service: HeroesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot(),
                RouterTestingModule
            ],
            declarations: [
                NewEditHeroContentComponent
            ],
            providers: [
                SpinnerService,
                HeroesService,
                FormBuilder
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewEditHeroContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(HeroesService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getHeroById get hero by id from the subscription', () => {
        const id = 1;
        const spy = spyOn(service, 'getHeroById').and.returnValue(of(null));
        component.getHero(id);
        expect(spy).toHaveBeenCalled();
    });

});
