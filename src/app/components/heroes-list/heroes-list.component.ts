import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store'
import {Observable} from 'rxjs'
import { HeroesList } from '../../models/heroes-list';
import { HeroesFetchAtt } from '../../actions';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  public list: HeroesList
  constructor(
    store$ : Store<State>
  ) {
    store$.dispatch(new HeroesFetchAtt);
    store$.select(x => x.hero).subscribe(heroes => this.list=heroes);
   }

  ngOnInit() {
  }
}
