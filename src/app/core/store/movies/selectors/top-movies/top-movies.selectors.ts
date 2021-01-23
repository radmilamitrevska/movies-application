import { createSelector } from '@ngrx/store';
import { MovieDto } from 'src/app/components/movies-list/movie.dto';
import { AppState } from '../../../app.state';

export const movies = (state: AppState) => state.movies;

export const getTop5HighestRatedMoviesSelector = createSelector(movies, getTop5HighestRatedMovies);

export function getTop5HighestRatedMovies(state: Map<string, MovieDto>): MovieDto[] {
  return [...state]
    .sort((a, b) => {
      return parseFloat((b[1] as MovieDto).rate) - parseFloat((a[1] as MovieDto).rate);
    })
    .slice(0, 5)
    .map((array) => array[1]);
}
