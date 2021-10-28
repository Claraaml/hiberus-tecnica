import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { hero } from 'src/app/models/HeroModel';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit-hero-content',
  templateUrl: './new-edit-hero-content.component.html',
  styleUrls: ['./new-edit-hero-content.component.scss']
})
export class NewEditHeroContentComponent implements OnInit {

  action: string;
  idHero: number;
  tittle: string;

  form: FormGroup;
  hero: hero;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private spinnerService: SpinnerService,
    private heroesService: HeroesService,
    private router: Router,
  ) {
    this.action = this.route.snapshot.paramMap.get('action');
    this.idHero = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      name: [{ value: null, disabled: false }, { validators: Validators.compose([Validators.required]) }],
      power: { value: null, disabled: false }
    });
  }

  ngOnInit(): void {
    if (this.action === 'alta') {
      this.tittle = 'ALTA DE HÉROES';
    } else if (this.action === 'editar') {
      this.tittle = 'EDICIÓN DE HÉROES';
      this.getHero(this.idHero);
    }
  }

  getHero(id: number): void {
    this.spinnerService.show();
    this.heroesService.getHeroById(id).subscribe(respuesta => {
      this.hero = respuesta;
      this.fillForm(respuesta);
      this.spinnerService.hide();
    });
  }

  fillForm(data: hero): void {
    this.form.controls.name.setValue(data.name);
    this.form.controls.power.setValue(data.power);
  }

  save(): void {
    if (this.form.valid) {
      const body: hero = {
        id: this.idHero,
        name: this.form.controls.name.value,
        power: this.form.controls.power.value,
      };

      let call;
      if (this.action === 'alta') {
        call = this.heroesService.createHero(body);
      } else {
        call = this.heroesService.updateHero(body);
      }

      this.spinnerService.show();
      call.subscribe(response => {
        this.spinnerService.hide();
        if (response === 'OK') {
          Swal.fire('¡Correcto!', 'El héroe se ha guardado correctamente.', 'success');
          this.router.navigate(['/']);
        }
      });
    }
  }

  back(): void {
    this.router.navigate(['/']);
  }

}
