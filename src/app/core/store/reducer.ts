import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { AppState } from './app.state';
import { moviesReducer } from './movies/reducers/movies.reducer';

export const reducer: ActionReducerMap<AppState> = {
  movies: moviesReducer
};
