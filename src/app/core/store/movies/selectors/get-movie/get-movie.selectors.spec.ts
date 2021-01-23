import { MovieDto } from '../../../../../components/movies-list/movie.dto';
import { convertToMap } from '../../reducers/movies.reducer';
import { movies } from '../../../../shared/movie.mock-data';
import { getMovieByKey } from './get-movie.selectors';

describe('getMovieSelector', () => {
  let movieMap: Map<string, MovieDto>;
  beforeEach(() => {
    movieMap = convertToMap(movies);
  });

  it('get by id undefinded', () => {
    const movie = getMovieByKey(movieMap, 'wrong-key');
    expect(movie).toBeUndefined();
  });

  it('get by id exist', () => {
    const movie = getMovieByKey(movieMap, 'the-matrix');
    expect(movie).toBeInstanceOf(Object);
  });
});
