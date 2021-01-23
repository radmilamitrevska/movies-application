import { createSelector } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { SearchMovies } from './util/search-movies';

export const movies = (state: AppState) => state.movies;

export const searchMoviesSelector = createSelector(movies, SearchMovies.handle);
