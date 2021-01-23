import { MovieDto } from 'src/app/components/movies-list/movie.dto';
import { movies } from 'src/app/core/shared/movie.mock-data';
import { convertToMap } from '../../../reducers/movies.reducer';
import { SearchMovies } from './search-movies';

describe('SearchMovies', () => {
  let movieMap: Map<string, MovieDto>;
  beforeEach(() => {
    movieMap = convertToMap(movies);
  });
  it('without search', () => {
    const filterMock = spyOn(SearchMovies as any, 'filter');
    const movie = SearchMovies.handle(movieMap, { genre: '', name: '' });
    expect(movie.length).toBe(24);
    expect(filterMock).not.toHaveBeenCalledWith();
  });

  it('search by genre comedy', () => {
    const movie = SearchMovies.handle(movieMap, { genre: 'comedy', name: '' });
    const AllMock = spyOn(SearchMovies as any, 'all');
    expect(movie.length).toBe(5);
    expect(AllMock).not.toHaveBeenCalledWith();
  });

  it('search by genre comedy and name', () => {
    const movie = SearchMovies.handle(movieMap, { genre: 'comedy', name: 'bad' });
    expect(movie.length).toBe(1);
    expect(movie[0].name).toBe('Bad Boys');
  });

  it('search by genre wron and name', () => {
    const movie = SearchMovies.handle(movieMap, { genre: 'scifi', name: 'bad' });
    expect(movie.length).toBe(0);
  });

  it('search and name', () => {
    const movie = SearchMovies.handle(movieMap, { genre: '', name: 'bad' });
    expect(movie.length).toBe(1);
    expect(movie[0].name).toBe('Bad Boys');
  });
});
