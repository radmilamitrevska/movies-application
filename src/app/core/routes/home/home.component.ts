import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieDto } from 'src/app/components/movies-list/movie.dto';
import { AppState } from '../../store/app.state';
import { getTop5HighestRatedMoviesSelector } from '../../store/movies/selectors/top-movies/top-movies.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  movies: MovieDto[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getTop5HighestRatedMoviesSelector).subscribe((state) => (this.movies = state));
  }
}
