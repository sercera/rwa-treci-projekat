import {Action} from '@ngrx/store';
import * as actions  from '../../actions';
import * as types from '../../action-types';
import { HeroesList } from '../../models/heroes-list';

const initalState: HeroesList = null

const heroReducer= (state: HeroesList = initalState, action : Action) =>{
    switch(action.type){
        case types.fetchHeroesSuccessfull: {
            return (action as actions.HeroesFetchSucc).heroesList;
        }
        default: {
            return state
        }
    }
}

export default heroReducer;