import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  search: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  searchOnChange(value: Event) {
    this.searchEvent.emit(String(value));
  }
}
