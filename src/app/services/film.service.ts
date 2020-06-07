import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CONFIG } from '../config';
import { UserService } from './user.service';

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
  films: Film[];
  
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }
  
  getFilms(): Observable<Film[]> {
    // Se this.films c'è già, lo ritorno subito (come Observable) altrimenti chiamo il server
    if (this.films) {
      return of(this.films);
    } else {
      return this.http.get<Film[]>(CONFIG.hostApi + '/film/read.php').pipe(
        tap(response => {
          console.log('Film scaricati dal server:', response);
          this.films = response; 
        }),
        catchError(error => {
          alert(error.status + ': ' + error.error);
          return [];
        })
      );
    }
  }
  
  addFilm(film: Film): Observable<any> {
    let loggedUser = this.userService.getLoggedUser();

    if (!loggedUser) {
      alert('please login');
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': loggedUser.token
      })
    };
    
    console.log('Provo ad aggiungere il film:', film);    
    return this.http.post<any>(CONFIG.hostApi + '/film/create.php', film, httpOptions).pipe(
      tap(response => {
        if (response.success) {
          if (this.films) {
            film.id = response.id;
            this.films.push(film);
          } else {
            this.getFilms().subscribe();
          }
        }
      }),
      catchError(error => {
        alert(error.status + ': ' + error.error);
        return of(false);
      })
    );
  }
  
  editFilm(film: Film): Observable<any> {
    let loggedUser = this.userService.getLoggedUser();

    if (!loggedUser) {
      alert('please login');
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': loggedUser.token
      })
    };

    console.log('Provo ad editare il film:', film);
    return this.http.post<any>(CONFIG.hostApi + '/film/update.php', film, httpOptions).pipe(
      tap(response => {
        console.log(response);
        if (response.success) {
          if (this.films) {
            let filmToEdit = this.films.find(x => x.id == film.id);
            filmToEdit = film;
          } else {
            this.getFilms().subscribe();
          }
        }
      }),
      catchError(error => {
        alert(error.status + ': ' + error.error);
        return of(false);
      })
    );
  }

  removeFilm(film: Film): Observable<any> {
    let loggedUser = this.userService.getLoggedUser();
    
    if (!loggedUser) {
      alert('please login');
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': loggedUser.token
      })
    };

    console.log('Provo a cancellare il film:', film);
    return this.http.post<any>(CONFIG.hostApi + '/film/delete.php', { id: film.id }, httpOptions).pipe(
      tap(response => {
        if (response.success) {
          if (this.films) {
            this.films = this.films.filter(x => x.id != film.id);
          } else {
            this.getFilms().subscribe();
          }
        }
      }),
      catchError(error => {
        alert(error.status + ': ' + error.error);
        return of(false);
      })
    );
  }
  
  getLastFilms(films: Film[]): Film[] {
    return films.slice(-4);
  }
  
  getTopFilms(films: Film[]): Film[] {
    return films.sort((film1,film2) => {
      return film2.stars - film1.stars;
    }).slice(0, 3);
  }
}
