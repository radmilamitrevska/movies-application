import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [CommonModule, RouterModule],
  exports: [MoviesListComponent]
})
export class MoviesListModule {}
