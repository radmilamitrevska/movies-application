import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieDto } from './movie.dto';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() movies: MovieDto[] = [];
}
