import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';
import { Observable, of } from 'rxjs';

const ACTORS: Actor[] = [

]

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  selectedActor: Actor;
  newActor: Actor;
  actors: Actor[];
  localStorage: any;

  constructor(private localStorageService) {
  
  }

  saveInLocalStorage() {
    this.localStorage.store("actor", this.actors)
  }

  getActor(): Observable<Actor[]> {

    this.actors = this.localStorage.retrieve("films") || ACTORS;
    return of(this.actors);
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
    this.saveInLocalStorage();
  }
  editfilm() {
    this.selectedActor = null;
    this.saveInLocalStorage();
  }
} 
