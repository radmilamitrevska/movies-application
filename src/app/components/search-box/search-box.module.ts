import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule {}
