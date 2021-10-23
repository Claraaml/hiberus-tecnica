import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(
    public spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
  }

}
