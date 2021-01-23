import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieDto } from 'src/app/components/movies-list/movie.dto';
import { AppState } from '../../store/app.state';
import { searchMoviesSelector } from '../../store/movies/selectors/search-movies/search-movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movies: MovieDto[] = [];
  movieGenre: string = '';
  movieName: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.searchMovies(this.movieGenre, this.movieName);
  }

  searchMovieByName(value: string) {
    this.movieName = value;
    this.searchMovies(this.movieGenre, this.movieName);
  }

  searchMovieByGenre(value: string) {
    this.movieGenre = value;
    this.searchMovies(this.movieGenre, this.movieName);
  }

  private searchMovies(genre: string, name: string) {
    this.store.select(searchMoviesSelector, { genre: genre, name: name }).subscribe((state) => (this.movies = state));
  }
}
