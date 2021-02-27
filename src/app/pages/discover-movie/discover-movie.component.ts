import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-discover-movie',
    templateUrl: './discover-movie.component.html',
    styleUrls: ['./discover-movie.component.scss']
})
export class DiscoverMovieComponent implements OnInit {

    movies: Movie[] = [];
    currentPage: number = 0;

    constructor(private movieService: MovieService) {

    }

    ngOnInit(): void {
        this.getDiscoverMovies();
    }

    getDiscoverMovies(): void {

        this.currentPage++;

        this.movieService.getDiscoveryMovies(this.currentPage)
            .subscribe(data => { this.movies = [...this.movies].concat(data.results) });
    }

}