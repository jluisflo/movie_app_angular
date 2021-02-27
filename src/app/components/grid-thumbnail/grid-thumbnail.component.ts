import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-grid-thumbnail',
  templateUrl: './grid-thumbnail.component.html',
  styleUrls: ['./grid-thumbnail.component.scss']
})
export class GridThumbnailComponent implements OnInit {

  @Input('movies') movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

    const movies = changes.movies.currentValue;

    if (movies) {
      this.movies = movies;
    }
  }

}