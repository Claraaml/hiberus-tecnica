import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryContentComponent } from './primary-content.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Primary Content Component', () => {

    let component: PrimaryContentComponent;
    let fixture: ComponentFixture<PrimaryContentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot(),
            ],
            declarations: [
                PrimaryContentComponent
            ],
            providers: [
                SpinnerService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrimaryContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
