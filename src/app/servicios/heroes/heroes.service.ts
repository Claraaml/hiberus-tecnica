import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { heroe, HEROES } from '../mock';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getListadoHeroes(): Observable<heroe[]> {
    return new Observable<heroe[]>(observer => {
      setTimeout(() => {
        observer.next(HEROES);
        observer.complete();
      }, 5000);
    });
  }

  getHeroeById(id: number): Observable<heroe> {
    return new Observable<heroe>(observer => {
      setTimeout(() => {
        const miheroe = HEROES.find(x => x.id === id);
        observer.next(miheroe);
        observer.complete();
      }, 5000);
    });
  }

  getListadoHeroesFiltrado(cadena: string): Observable<heroe[]> {
    return new Observable<heroe[]>(observer => {
      setTimeout(() => {
        const misheroes: heroe[] = [];
        HEROES.forEach(h => {
          if (h.nombre.includes(cadena)) {
            misheroes.push(h);
          }
        });
        observer.next(misheroes);
        observer.complete();
      }, 5000);
    });
  }

  postHeroe(body: heroe): Observable<string> {
    return new Observable<string>(observer => {
      setTimeout(() => {
        const lastItem = HEROES[HEROES.length - 1];
        const newHeroe: heroe = {
          id: lastItem.id + 1,
          nombre: body.nombre,
          superpoderes: body.superpoderes
        };
        HEROES.push(newHeroe);
        observer.next('OK');
        observer.complete();
      }, 5000);
    });
  }

  putHeroe(body: heroe): Observable<string> {
    return new Observable<string>(observer => {
      setTimeout(() => {
        const index = HEROES.findIndex(h => h.id === body.id);
        HEROES[index] = {
          id: body.id,
          nombre: body.nombre,
          superpoderes: body.superpoderes
        };
        observer.next('OK');
        observer.complete();
      }, 5000);
    });
  }

  deleteHeroe(id: number): Observable<string> {
    return new Observable<string>(observer => {
      const index = HEROES.findIndex(h => h.id === id);
      HEROES.splice(index, 1);
      setTimeout(() => {
        observer.next('OK');
        observer.complete();
      }, 5000);
    });
  }

}
