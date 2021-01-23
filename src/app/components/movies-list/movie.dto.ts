import { GenreType } from '../../core/shared/movie.model';

export interface MovieDto {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array<GenreType>;
  rate: string;
  length: string;
  img: string;
}
