import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { getMovieSelector } from '../../store/movies/selectors/get-movie/get-movie.selectors';
import { MovieDto } from '../../../components/movies-list/movie.dto';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
  movie: MovieDto | undefined;
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getMovie(params.key);
    });
  }

  private getMovie(key: string) {
    if (!key) {
      console.log(key);

      this.redirectToHomepage();
    }

    this.store.select(getMovieSelector, key).subscribe((movieState) => {
      if (!movieState) {
        this.redirectToHomepage();
      }
      this.movie = movieState;
    });
  }

  private redirectToHomepage() {
    this.router.navigate(['/']);
  }
}
