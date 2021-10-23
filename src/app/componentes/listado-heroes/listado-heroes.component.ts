import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroesService } from 'src/app/servicios/heroes/heroes.service';
import { heroe } from 'src/app/servicios/mock';

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
  ) { }

  ngOnInit(): void {
    this.obtenerListadoHeroes();
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  obtenerListadoHeroes(): void {
    this.servicioHeroes.getListadoHeroes().subscribe(respuesta => {
      this.dataSource = new MatTableDataSource(respuesta);
      this.dataSource.paginator = this.paginator;
    });
  }

}
