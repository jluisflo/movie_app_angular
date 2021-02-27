import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input('movie') movie: Movie;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

    const movie = changes.movie.currentValue;

    if (movie) {
      this.movie = movie;
      console.log(this.movie)
    }
  }

}
