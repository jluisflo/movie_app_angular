import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../models/movies.response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private API_URL: string = environment.moviedb_api;

    constructor(private http: HttpClient) { }

    getDiscoveryMovies(page: number): Observable<MovieResponse> {

        let endpoint = `/discover/movie?api_key=33f15bd9edbaa027e733322000e68744&sort_by=popularity.desc&page=${page}`;

        return this.http.get<MovieResponse>(this.API_URL + endpoint);
    }

}