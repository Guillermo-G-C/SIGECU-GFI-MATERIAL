import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { EventosDetailsComponent } from './modules/eventos/components/eventos-details/eventos-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/evento', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  { path: 'evento', component: EventosDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
