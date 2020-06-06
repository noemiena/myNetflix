import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { Observable, of } from 'rxjs';

const FILMS: Film[] = [
  {
  title: "The Big Lebowski",
  description: "Jeff The Dude Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it. When the dude Lebowski is mistaken for a millionaire Lebowski, two thugs urinate on his rug to coerce him into paying a debt he knows nothing about.",
  director: "The Coen Brothers",
  duration:  "120 min",
  releaseYear: 1998,
  stars: 5,
  cast: [],
  genres:[],
  tags: 'cult'
  },

  {
    title: "Point Break",
    description: "Point Break is a 1991 American crime action film directed by Kathryn Bigelow and written by W. Peter Iliff. It stars Patrick Swayze, Keanu Reeves, Lori Petty and Gary Busey, and the film's title refers to the surfing term point break, where a wave breaks as it hits a point of land jutting out from the coastline",
    director: "Kathryn Bigelow",
    duration:  "120 min",
    releaseYear: 1991,
    stars: 5,
    cast: [],
    genres:[],
    tags: 'wavy'
    }
]

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  selectedFilm: Film;
  newFilm: Film;
  film: Film[];
  localStorage: any;
  
  constructor(private localStorageService) {
  
  }

  saveInLocalStorage() {
    this.localStorage.store("film", this.film)
  }

  getFilm(): Observable<Film[]> {

    this.film = this.localStorage.retrieve("films") || FILMS;
    return of(this.film);
  }

  addFilm(film: Film) {
    this.film.push(film);
    this.saveInLocalStorage();
  }
  editfilm() {
    this.selectedFilm = null;
    this.saveInLocalStorage();
  }
}
