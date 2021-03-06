import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { ActorsComponent } from './actors/actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { GenresComponent } from './genres/genres.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'films/add', component: AddFilmComponent },
  { path: 'films/edit/:id', component: EditFilmComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'actors/add', component: AddActorComponent },
  { path: 'actors/edit/:id', component: EditActorComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/add', component: AddGenreComponent },
  { path: 'genres/edit/:id', component: EditGenreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
