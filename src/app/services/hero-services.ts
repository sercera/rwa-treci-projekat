import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hero} from '../models/hero';
import { map } from 'rxjs/operators';
import { HeroesList } from '../models/heroes-list';
import { HttpClient } from '@angular/common/http';

@Injectable() export class HeroService{
    private url = 'https://api.opendota.com/api/heroStats'

    constructor(private http: HttpClient){}

    findHeroes():Observable<HeroesList>{
        return this.http.get<HeroesList>(this.url);
    }
}