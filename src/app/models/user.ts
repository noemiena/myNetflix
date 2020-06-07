import { Film } from './film';

export interface User {
    token: string | string[];
    id?: number;
    firstname: string;
    lastname: string;
    favoritesFilm: Film[]
}