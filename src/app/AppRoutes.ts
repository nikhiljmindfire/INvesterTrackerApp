import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent,RegistrationComponent } from './Modules/AccountModule';
import * as modules from './Modules';

//configuration of routing
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'LandingScreen',
    pathMatch: 'full'
  },
  { path: 'LandingScreen', component: modules.LandingScreenComponent },
  { path: 'Register', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent }, //login
  { path: 'Grid', component: modules.GridComponent }, //login
  {
    path: 'home', children: [
      { path: 'LandingScreen', component: modules.GridComponent }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);