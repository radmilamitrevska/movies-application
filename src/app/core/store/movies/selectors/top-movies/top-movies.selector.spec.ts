import { movies } from 'src/app/core/shared/movie.mock-data';
import { convertToMap } from '../../reducers/movies.reducer';
import { getTop5HighestRatedMovies } from './top-movies.selectors';

describe('getTop5HighestRatedMovies', () => {
  it('biggest 5', () => {
    const topMoviest = getTop5HighestRatedMovies(convertToMap(movies));
    expect(topMoviest.length).toBe(5);
    expect(topMoviest[0].rate).toBe('9.0');
  });
});
