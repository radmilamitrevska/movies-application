import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { HomeComponent } from './core/routes/home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './core/store/reducer';
import { MoviesListModule } from './components/movies-list/movies-list.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavigationComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, MoviesListModule, StoreModule.forRoot(reducer)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
