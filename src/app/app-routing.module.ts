import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {
    path: 'hero/:id',
    component: HeroesComponent
  },
  {
    path: '',
    component: HeroesListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
