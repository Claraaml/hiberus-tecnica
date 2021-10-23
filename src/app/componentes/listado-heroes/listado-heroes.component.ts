import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes/heroes.service';
import { heroe } from 'src/app/servicios/mock';
import { SpinnerService } from 'src/app/servicios/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.scss']
})
export class ListadoHeroesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'nombre', 'superpoderes', 'acciones'];
  dataSource: MatTableDataSource<heroe>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private servicioHeroes: HeroesService,
    private spinner: SpinnerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.obtenerListadoHeroes();
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  obtenerListadoHeroes(): void {
    this.spinner.show();
    this.servicioHeroes.getListadoHeroes().subscribe(respuesta => {
      this.dataSource = new MatTableDataSource(respuesta);
      this.dataSource.paginator = this.paginator;
      this.spinner.hide();
    });
  }

  editarHeroe(_heroe: heroe): void {
    // this.router.navigate(['/alta-editar'], { queryParams: { accion: 'editar', id: _heroe.id } });
    const url = '/alta-editar/editar/' + _heroe.id;
    this.router.navigate([url]);
  }

  eliminarHeroe(_heroe: heroe): void {
    Swal.fire({
      title: '¡Atención!',
      text: `¿Está seguro que desea eliminar al héroe '${_heroe.nombre}'?`,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'ACEPTAR',
      cancelButtonText: 'CANCELAR',
      confirmButtonColor: '#08aa08',
      cancelButtonColor: '#FF0000',
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.servicioHeroes.deleteHeroe(_heroe.id).subscribe(respuesta => {
          if (respuesta === 'OK') {
            this.spinner.hide();
            Swal.fire('¡Correcto!', 'El héroe se ha eliminado correctamente.', 'success');
            this.obtenerListadoHeroes();
          }
        });
      }
    });
  }

}
