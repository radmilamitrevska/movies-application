import { Component, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GenreType, genreType } from 'src/app/core/shared/movie.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  genres = genreType;
  selectedGenre: string = '';
  @Output() selectEvent = new EventEmitter<string>();

  onChange(value: Event) {
    this.selectEvent.emit(String(value));
  }
}
