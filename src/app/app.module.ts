import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store"

import { AppComponent } from './app.component';
import { rootReducer } from './store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {HttpClientModule} from '@angular/common/http';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './store/effects/hero-effect';
import { HeroService } from './services/hero-services';
import { ChampEffects } from './store/effects/champ-effect';
import { ChampService } from './services/champ-services';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([
      HeroEffects,
      ChampEffects
    ]),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [
    HeroService,
    ChampService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
