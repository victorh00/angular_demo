import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

/* appConfig: Dependency Injection
   You can use the 'providers' field of the ApplicationConfig (passed to the bootstrapApplication function) 
   to provide a service or other Injectable at the application level.
*/
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
