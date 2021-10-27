import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { hero } from 'src/app/models/HeroModel';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-edit-hero',
  templateUrl: './new-edit-hero.component.html',
  styleUrls: ['./new-edit-hero.component.scss']
})
export class NewEditHeroComponent implements OnInit {

  action: string;
  idHero: number;
  tittle: string;

  form: FormGroup;
  hero: hero;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private spinner: SpinnerService,
    private service: HeroesService,
    private router: Router,
  ) {
    // this.route.params.subscribe(params => {
    //   this.accion = params.accion;
    //   this.idHeroe = Number(params.id);
    // });

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
    this.spinner.show();
    this.service.getHeroById(id).subscribe(respuesta => {
      this.hero = respuesta;
      this.fillForm(respuesta);
      this.spinner.hide();
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
      if (this.action === 'NEW') {
        call = this.service.createHero(body);
      } else {
        call = this.service.updateHero(body);
      }

      this.spinner.show();
      call.subscribe(response => {
        this.spinner.hide();
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
