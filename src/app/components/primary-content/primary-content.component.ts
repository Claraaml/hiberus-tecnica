import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-primary-content',
  templateUrl: './primary-content.component.html',
  styleUrls: ['./primary-content.component.scss']
})
export class PrimaryContentComponent implements OnInit {

  constructor(
    public spinnerService: SpinnerService,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

}
