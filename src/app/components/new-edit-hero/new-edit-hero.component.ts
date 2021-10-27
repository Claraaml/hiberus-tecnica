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

  accion: string;
  idHeroe: number;
  titulo: string;

  form: FormGroup;
  heroe: hero;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private spinner: SpinnerService,
    private servicio: HeroesService,
    private router: Router,
  ) {
    // this.route.params.subscribe(params => {
    //   this.accion = params.accion;
    //   this.idHeroe = Number(params.id);
    // });

    this.accion = this.route.snapshot.paramMap.get('accion');
    this.idHeroe = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      nombre: [{ value: null, disabled: false }, { validators: Validators.compose([Validators.required]) }],
      superpoderes: { value: null, disabled: false }
    });
  }

  ngOnInit(): void {
    if (this.accion === 'alta') {
      this.titulo = 'ALTA DE HÉROES';
    } else if (this.accion === 'editar') {
      this.titulo = 'EDICIÓN DE HÉROES';
      this.obtenerHeroe(this.idHeroe);
    }
  }

  obtenerHeroe(id: number): void {
    this.spinner.show();
    this.servicio.getHeroById(id).subscribe(respuesta => {
      this.heroe = respuesta;
      this.rellenarFormulario(respuesta);
      this.spinner.hide();
    });
  }

  rellenarFormulario(datos: hero): void {
    this.form.controls.nombre.setValue(datos.nombre);
    this.form.controls.superpoderes.setValue(datos.superpoderes);
  }

  guardar(): void {
    if (this.form.valid) {
      const body: hero = {
        id: this.idHeroe,
        nombre: this.form.controls.nombre.value,
        superpoderes: this.form.controls.superpoderes.value,
      };

      let llamada;
      if (this.accion === 'ALTA') {
        llamada = this.servicio.createHero(body);
      } else {
        llamada = this.servicio.updateHero(body);
      }

      this.spinner.show();
      llamada.subscribe(respuesta => {
        this.spinner.hide();
        if (respuesta === 'OK') {
          Swal.fire('¡Correcto!', 'El héroe se ha guardado correctamente.', 'success');
          this.router.navigate(['/']);
        }
      });
    }
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
