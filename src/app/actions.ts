import {Action} from '@ngrx/store'
import * as types from './action-types';
import { HeroesList } from './models/heroes-list';
import {Hero} from './models/hero';


export class HeroesFetchAtt implements Action{
    type=types.fetchHeroesAttempt
    constructor(){}
}

export class HeroesFetchSucc implements Action{
    type=types.fetchHeroesSuccessfull
    constructor(public heroesList: HeroesList){}
}

export class ChampFetchAtt implements Action{
    type=types.fetchChampAttempt
    constructor(public id:number){}
}

export class ChampFetchSucc implements Action{
    type=types.fetchChampSuccessfull
    constructor(public hero: Hero){}
}
