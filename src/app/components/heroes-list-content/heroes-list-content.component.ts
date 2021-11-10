import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { hero } from 'src/app/models/HeroModel';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
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
  disableSearch: boolean = true;

  constructor(
    private heroesService: HeroesService,
    private spinner: SpinnerService,
    private router: Router,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.filterControl = new FormControl();
    this.filterControl.valueChanges.subscribe(value => {
      if (value === '' || !value) {
        this.disableSearch = true;
      } else {
        this.disableSearch = false;
      }
    });
    this.getHeroesList();
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
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
    this.router.navigate([url]);
  }

  deleteHero(_hero: hero): void {

    Swal.fire({
      title: this.translate.instant('HEROES.DELETE-SWAL.WARNING'),
      text: this.translate.instant('HEROES.DELETE-SWAL.MESSAGE', { hero: _hero.name }),
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('HEROES.DELETE-SWAL.CONF-BTN'),
      cancelButtonText: this.translate.instant('HEROES.DELETE-SWAL.CANC-BTN'),
      confirmButtonColor: '#08aa08',
      cancelButtonColor: '#FF0000',
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.heroesService.deleteHeroById(_hero.id).subscribe(response => {
          this.spinner.hide();
          Swal.fire(
            this.translate.instant('HEROES.CORRECT-SWAL.CORRECT'),
            this.translate.instant('HEROES.CORRECT-SWAL.MESSAGE'), 'success');
          this.getHeroesList();
        });
      }
    });
  }

  searchHero(characters: string): void {
    this.spinner.show();
    this.heroesService.getFilteredHeroesList(characters).subscribe(
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
