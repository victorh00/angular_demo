import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

/* appConfig: Dependency Injection
   You can use the 'providers' field of the ApplicationConfig (passed to the bootstrapApplication function) 
   to provide a service or other Injectable at the application level.
*/
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
