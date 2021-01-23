import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListModule } from 'src/app/components/movies-list/movies-list.module';
import { SearchBoxModule } from '../../../components/search-box/search-box.module';
import { SelectModule } from '../../../components/select/select.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesListModule, SearchBoxModule, SelectModule, MoviesRoutingModule]
})
export class MoviesModule {}
