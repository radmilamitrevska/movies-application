# MoviesApp

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0
- This project is split in multiple modules, each responsible for his own functionality.
- There are three routes, home, movies and movie route.
- Movies and movie routes are lazy loaded routes, they have their own routing module.
- I have used OnPush Change Detection Strategy for better performance.
- For state management I have used NGRX.
- There are unit test for components, and selector functionality.
- Responsive design.
- I have used BEM css style guide.
- Containerizing application for production using Docker

Things that should be integrated if this was bigger project:
- Take JSON with HTTP if is outside of the project folders
- Cashed search functionality with key:value
- Fully tested with code coverage
- Add logger functionality, log errors in file

## Code quality
- I have used strict mode, for strict typing
- Installed prettierr (for running prettier run `npm run format`)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Docker setup
 - Run `docker build . -t <DockerHubUsername>/movies-application` for building docker image
 - Run `docker run -p 3000:80 <DockerHubUsername>/movies-application` to run the docker image
 - Navigate to your browser with http://localhost:3000



