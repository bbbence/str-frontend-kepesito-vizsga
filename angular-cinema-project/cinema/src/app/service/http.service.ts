import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/bbbence/movies';

  constructor(private http: HttpClient) { }

  getMovieList(): any {
    return this.http.get<Movie[]>(`${this.BASE_URL};
  }

  deleteMovie(id: number): any {
    return this.http.delete<Movie>(${this.BASE_URL}/${id}).subscribe(
      () => this.getMovieList()
    )
  }
}
