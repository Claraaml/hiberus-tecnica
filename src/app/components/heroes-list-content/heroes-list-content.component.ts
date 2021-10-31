import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { hero } from 'src/app/models/HeroModel';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes-list-content',
  templateUrl: './heroes-list-content.component.html',
  styleUrls: ['./heroes-list-content.component.scss']
})
export class HeroesListContentComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'power', 'actions'];
  dataSource: MatTableDataSource<hero>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showTable = false;

  filterControl: FormControl;

  constructor(
    private heroesService: HeroesService,
    private spinner: SpinnerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.filterControl = new FormControl();
    this.getHeroesList();
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  getHeroesList(): void {
    this.spinner.show();
    this.heroesService.getHeroesList().subscribe((response: hero[]) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      if (response.length > 0) { this.showTable = true; }
      else if (response.length === 0) { this.showTable = false; }
      this.spinner.hide();
    });
  }

  editHero(_hero: hero): void {
    const url = '/alta-editar/editar/' + _hero.id;
    // this.router.navigate(['/alta-editar'], {queryParams: {action: 'editar', id: _hero.id}});
    this.router.navigate([url]);
  }

  deleteHero(_hero: hero): void {
    Swal.fire({
      title: '¡Atención!',
      text: `¿Está seguro que desea eliminar al héroe '${_hero.name}'?`,
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
        this.heroesService.deleteHeroById(_hero.id).subscribe(response => {
          if (response === 'OK') {
            this.spinner.hide();
            Swal.fire('¡Correcto!', 'El héroe se ha eliminado correctamente.', 'success');
            this.getHeroesList();
          }
        });
      }
    });
  }

  searchHero(): void {
    this.spinner.show();
    this.heroesService.getFilteredHeroesList(this.filterControl.value).subscribe(
      (response: hero[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        if (response.length > 0) { this.showTable = true; }
        else if (response.length === 0) { this.showTable = false; }
        this.spinner.hide();
      }
    );
  }

  addHero(): void {
    const url = '/alta-editar/alta';
    this.router.navigate([url]);
  }

  reset(): void {
    this.filterControl.reset();
    this.getHeroesList();
  }
}
