import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { movies } from '../../shared/movie.mock-data';
import { convertToMap } from '../../store/movies/reducers/movies.reducer';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  const initialState = { movies: convertToMap(movies) };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      imports: [RouterModule.forRoot([])],
      declarations: [MovieComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('movie does not exist, redirect to homepage', () => {
    const redirectToHomepageMock = spyOn(component as any, 'redirectToHomepage');
    (component as any).getMovie('test');
    expect(redirectToHomepageMock).toHaveBeenCalled();
    expect(component.movie).toBeUndefined();
  });

  it('movie exist', () => {
    const redirectToHomepageMock = spyOn(component as any, 'redirectToHomepage');
    (component as any).getMovie('deadpool');
    expect(redirectToHomepageMock).not.toHaveBeenCalled();
    expect(component.movie).toBeInstanceOf(Object);
  });

  it('empty route param redirect to homeage', () => {
    const redirectToHomepageMock = spyOn(component as any, 'redirectToHomepage');
    (component as any).getMovie('');
    expect(redirectToHomepageMock).toHaveBeenCalled();
    expect(component.movie).toBeUndefined();
  });
});
