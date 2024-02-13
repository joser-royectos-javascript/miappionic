import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
  static URL = "https://fpaniaguajavascript.github.io/movies/movies-1900s.json";
  constructor(private clienteHttp:HttpClient) { }
  getMovies() {
    return this.clienteHttp?.get<Pelicula[]>(HttpdataService.URL);//Devuelve un Observable
  }
}
