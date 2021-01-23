import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { MovieDto } from '../../../../../components/movies-list/movie.dto';

export const movies = (state: AppState) => state.movies;

export const getMovieSelector = createSelector(movies, getMovieByKey);

export function getMovieByKey(state: Map<string, MovieDto>, key: string): MovieDto | undefined {
  return state.get(key);
}
