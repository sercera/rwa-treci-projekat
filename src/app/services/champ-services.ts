import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hero } from '../models/hero';
import { map, tap } from 'rxjs/operators';
import { HeroesList } from '../models/heroes-list';
import { HttpClient } from '@angular/common/http';

@Injectable() export class ChampService {
    private url = 'https://api.opendota.com/api/heroStats'

    constructor(private http: HttpClient) { }

    findHeroe(id): Observable<Hero> {
        return this.http.get<Hero[]>(this.url)
            .pipe(
                map(heroes =>
                    heroes.find(hero => hero.id === id))
            );
    }
}
