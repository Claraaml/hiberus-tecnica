import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryContentComponent } from './primary-content.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpinnerService } from 'src/app/services/spinner.service';
import { TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Primary Content Component', () => {

    let component: PrimaryContentComponent;
    let fixture: ComponentFixture<PrimaryContentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                PrimaryContentComponent
            ],
            providers: [
                SpinnerService,
                TranslateService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });
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
