import {Injectable} from '@angular/core'
import {Effect, Actions} from '@ngrx/effects'
import {ChampService} from '../../services/champ-services'
import { map, switchMap } from 'rxjs/operators'
import * as actions from '../../actions'
import *  as types from '../../action-types'


@Injectable()
    export class ChampEffects{
        constructor(
            private actions$: Actions,
            private service: ChampService
        ){}

        @Effect()
        getChamp$ = this.actions$
        .ofType(types.fetchChampAttempt)
        .pipe(
            map((action : actions.ChampFetchAtt) => action.id),
            switchMap((id) => {
                return this.service.findHeroe(id)
                .pipe(
                    map(hero => new actions.ChampFetchSucc(hero))
                )
            })
        )
    }   