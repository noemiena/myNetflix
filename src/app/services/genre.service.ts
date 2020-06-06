import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Observable, of } from 'rxjs';

const GENRES: Genre[] = [
  
]

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  selectedGenre: Genre;
  newGenre: Genre;
  genre: Genre[];
  localStorage: any;

  constructor(private localStorageService) {
  
  }

  saveInLocalStorage() {
    this.localStorage.store("genre", this.genre)
  }

  getGenre(): Observable<Genre[]> {

    this.genre = this.localStorage.retrieve("films") || GENRES;
    return of(this.genre);
  }

  addGenre(genre: Genre) {
    this.genre.push(genre);
    this.saveInLocalStorage();
  }
  editfilm() {
    this.selectedGenre = null;
    this.saveInLocalStorage();
  }
}
