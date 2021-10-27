import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hero } from '../../models/HeroModel';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl = 'http://localhost:3000/heroes';

  constructor(
    private http: HttpClient,
  ) { }

  getHeroesList(): Observable<hero[]> {
    return new Observable<hero[]>(observer => {
      this.http.get(this.baseUrl).subscribe((data: hero[]) => {
        observer.next(data);
        observer.complete();
      },
        (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  getHeroById(id: number): Observable<hero> {
    return new Observable<hero>(observer => {
      this.http.get(this.baseUrl + `/${id}`).subscribe((data: hero) => {
        observer.next(data);
        observer.complete();
      },
        (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  /*getFilterHeroesList(cadena: string): Observable<hero[]> {
    return new Observable<hero[]>(observer => {
      setTimeout(() => {
        const myheroes: hero[] = [];
        HEROES.forEach(h => {
          if (h.nombre.includes(cadena)) {
            myheroes.push(h);
          }
        });
        observer.next(myheroes);
        observer.complete();
      }, 5000);
    });
  }*/

  createHero(body: hero): Observable<string> {
    return new Observable<string>(observer => {
      this.http.post(this.baseUrl, body).subscribe(() => {
        observer.next('OK');
        observer.complete();
      },
        (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  updateHero(body: hero): Observable<string> {
    return new Observable<string>(observer => {
      this.http.put(this.baseUrl + `/${body.id}`, body).subscribe(() => {
        observer.next('OK');
        observer.complete();
      },
        (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  deleteHeroById(id: number): Observable<string> {
    return new Observable<string>(observer => {
      this.http.delete(this.baseUrl + `/${id}`).subscribe(() => {
        observer.next('OK');
        observer.complete();
      },
        (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

}
