import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {Observable} from 'rxjs';
import { ChampFetchAtt } from '../../actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public oneHero: Hero
  constructor( 
    store$ : Store<State>,
    private route: ActivatedRoute
 ) {
   const id=route.snapshot.paramMap.get('id');
    store$.dispatch(new ChampFetchAtt(+id));
    store$.select(x => x.champ).subscribe(champs => this.oneHero=champs);
   }
  ngOnInit() {
  }

}
