import { MovieDto } from 'src/app/components/movies-list/movie.dto';

export interface AppState {
  movies: Map<string, MovieDto>;
}
