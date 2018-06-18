import {Injectable} from '@angular/core'
import {Effect, Actions} from '@ngrx/effects'
import {HeroService} from '../../services/hero-services'
import { map, switchMap } from 'rxjs/operators'
import *  as types from '../../action-types'
import * as actions from '../../actions'

@Injectable()
    export class HeroEffects{
        constructor(
            private actions$: Actions,
            private service: HeroService
        ){}

        @Effect()
        getAll$ = this.actions$
        .ofType(types.fetchHeroesAttempt)
        .pipe(
            switchMap(() => {
                return this.service.findHeroes()
                .pipe(
                    map(heroes => new actions.HeroesFetchSucc(heroes))
                )
            })
        )
    }   