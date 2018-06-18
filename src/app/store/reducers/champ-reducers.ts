import {Action} from '@ngrx/store';
import * as actions  from '../../actions';
import * as types from '../../action-types';
import { HeroesList } from '../../models/heroes-list';
import {Hero} from '../../models/hero';

const initalState: Hero = null

const champReducer= (state: Hero = initalState, action : Action) =>{
    switch(action.type){
        case types.fetchChampSuccessfull: {
            return (action as actions.ChampFetchSucc).hero;
        }
        default: {
            return state
        }
    }
}

export default champReducer;