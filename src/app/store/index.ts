
import {ActionReducerMap} from '@ngrx/store'
import { HeroesList } from '../models/heroes-list';
import heroReducer from './reducers/hero-reducer';
import { Hero } from '../models/hero';
import champReducer from './reducers/champ-reducers';

export interface State {
    hero : HeroesList
    champ: Hero
}

export const rootReducer: ActionReducerMap<State> = {
    hero : heroReducer,
    champ : champReducer
}