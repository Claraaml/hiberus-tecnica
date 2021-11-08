import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { hero } from 'src/app/models/HeroModel';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { NewEditHeroContentComponent } from './new-edit-hero-content.component';
import { FormBuilder, FormsModule } from '@angular/forms';

const heroesList: hero[] = [
    {
        id: 1,
        name: 'Superman',
        power: 'Superfuerza y supervelocidad'
    },
    {
        id: 2,
        name: 'Spiderman',
        power: 'Sentido arácnido'
    },
    {
        id: 3,
        name: 'Scarlet Witch',
        power: 'Poderes mentales y mágicos'
    },
];


describe('Heroes List Content Component', () => {

    let component: NewEditHeroContentComponent;
    let fixture: ComponentFixture<NewEditHeroContentComponent>;
    let service: HeroesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot(),
                RouterTestingModule,
                FormBuilder
            ],
            declarations: [
                NewEditHeroContentComponent
            ],
            providers: [
                SpinnerService,
                HeroesService
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

    it('getHero get hero by id from the subscription', () => {
        const id = 1;
        const mhero: hero = {
            id: 1,
            name: 'Superman',
            power: 'Superfuerza y supervelocidad'
        };
        const spy = spyOn(service, 'getHeroById').and.returnValue(of(mhero));
        component.getHero(id);
        expect(spy).toHaveBeenCalled();
    });

});
