import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { hero } from 'src/app/models/HeroModel';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { HeroesListContentComponent } from './heroes-list-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

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

    let component: HeroesListContentComponent;
    let fixture: ComponentFixture<HeroesListContentComponent>;
    let service: HeroesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot(),
                RouterTestingModule
            ],
            declarations: [
                HeroesListContentComponent
            ],
            providers: [
                SpinnerService,
                HeroesService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesListContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(HeroesService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getHeroesList get heroes from the subscription', () => {
        const spy = spyOn(service, 'getHeroesList').and.returnValue(of(null));
        component.getHeroesList();
        expect(spy).toHaveBeenCalled();
    });

    it('searchHero get heros filtered from the subscription', () => {
        const list: hero[] = [];
        const characters: string = 'man';
        const spy = spyOn(service, 'getFilteredHeroesList').and.returnValue(of(list));
        component.searchHero(characters);
        expect(spy).toHaveBeenCalled();
    });

});
