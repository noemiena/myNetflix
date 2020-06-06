import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LocalStorageService, NgxWebstorageModule} from 'ngx-webstorage';
import { ActorsComponent } from './actors/actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { FilmsComponent } from './films/films.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenresComponent } from './genres/genres.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars/stars.component';
@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    AddActorComponent,
    AddFilmComponent,
    AddGenreComponent,
    EditActorComponent,
    EditFilmComponent,
    EditGenreComponent,
    FilmsComponent,
    DashboardComponent,
    GenresComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
