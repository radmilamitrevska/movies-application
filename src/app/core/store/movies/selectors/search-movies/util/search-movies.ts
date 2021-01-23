import { MovieDto } from 'src/app/components/movies-list/movie.dto';
import { GenreType } from 'src/app/core/shared/movie.model';

export class SearchMovies {
  static handle(state: Map<string, MovieDto>, search: { genre: string; name: string }): MovieDto[] {
    if (SearchMovies.returnAllMovieRequirements(search)) {
      return SearchMovies.all(state);
    }
    return SearchMovies.filter(state, search);
  }

  private static returnAllMovieRequirements(search: { genre: string; name: string }) {
    return !search.genre.length && !search.name.length;
  }

  private static all(state: Map<string, MovieDto>) {
    return [...state].map((array) => array[1]);
  }

  private static filter(state: Map<string, MovieDto>, search: { genre: string; name: string }) {
    return [...state]
      .filter((movieMap) => {
        const movie = movieMap[1] as MovieDto;
        return SearchMovies.searchTitle(search.name, movie) && SearchMovies.searchByGenre(search, movie);
      })
      .map((array) => array[1]);
  }

  private static searchByGenre(search: { genre: string; name: string }, movie: MovieDto): boolean {
    if (!search.genre.length) {
      return true;
    }
    return movie.genres.includes(search.genre as GenreType);
  }

  private static searchTitle(searchName: string, movie: MovieDto): boolean {
    if (!searchName.length) {
      return true;
    }

    const regex = new RegExp(searchName.toLowerCase(), 'g');
    return Boolean(movie.name.toLowerCase().match(regex));
  }
}
