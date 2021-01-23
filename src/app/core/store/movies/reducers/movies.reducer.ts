import { MovieDto } from 'src/app/components/movies-list/movie.dto';
import { movies } from '../../../shared/movie.mock-data';

export let initialState = convertToMap(movies);

export function moviesReducer(state = initialState) {
  return state;
}

export function convertToMap(movies: Array<MovieDto>) {
  let i;
  const movieMap = new Map<string, MovieDto>();
  for (i = 0; i < movies.length; i++) {
    movieMap.set(movies[i].key, movies[i]);
  }

  return movieMap;
}
