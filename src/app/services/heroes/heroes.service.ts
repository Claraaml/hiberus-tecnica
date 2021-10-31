import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hero } from '../../models/HeroModel';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl = 'http://localhost:3000/heroes';

  constructor(
    private http: HttpClient,
  ) { }

  getHeroesList(): Observable<hero[]> {
    return this.http.get<hero[]>(this.baseUrl);
  }

  getHeroById(id: number): Observable<hero> {
    return this.http.get<hero>(this.baseUrl + `/${id}`);
  }

  getFilteredHeroesList(cadena: string): Observable<hero[]> {
    return this.http.get<hero[]>(this.baseUrl).pipe(map(data =>
      data.filter((h: hero) => h.name.toUpperCase().includes(cadena.toUpperCase()))));
  }

  createHero(body: hero): Observable<string> {
    return this.http.post<string>(this.baseUrl, body);
  }

  updateHero(body: hero): Observable<string> {
    return this.http.put<string>(this.baseUrl + `/${body.id}`, body);
  }

  deleteHeroById(id: number): Observable<string> {
    return this.http.delete<string>(this.baseUrl + `/${id}`);
  }

}
