// From Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// Imported Modules
import { NgxWebstorageModule } from 'ngx-webstorage'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// My Modules
import { AppRoutingModule } from './app-routing.module';

// My Components
// --- General ---
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StarsComponent } from './stars/stars.component';
import { NavbarComponent } from './navbar/navbar.component';
// --- Film ---
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
// --- Actor ---
import { ActorsComponent } from './actors/actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
// --- Genre ---
import { GenresComponent } from './genres/genres.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';



@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    AddActorComponent,
    AddFilmComponent,
    AddGenreComponent,
    DashboardComponent,
    EditActorComponent,
    EditFilmComponent,
    EditGenreComponent,
    FilmsComponent,
    GenresComponent,
    StarsComponent,
    
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
