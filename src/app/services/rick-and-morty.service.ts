import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private URLBase='https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  obtenerPersonajes(){
    return this.http.get(this.URLBase+'/character')
  }
  obtenerCapitulos(){
    return this.http.get(this.URLBase+'/episode')

  }
  obtenerLocaciones(){
    return this.http.get(this.URLBase+'/location')

  }
}