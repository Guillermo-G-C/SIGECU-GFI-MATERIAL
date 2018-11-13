import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { EventosDetailsComponent } from './modules/eventos/components/evento-details/eventos-details.component';
import { EventosListComponent } from './modules/eventos/components/eventos-list/eventos-list.component';
import { AddEventoComponent } from './modules/eventos/components/add-evento/add-evento.component';

const routes: Routes = [
  { path: '', redirectTo: '/addEvento', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  { path: 'evento', component: EventosDetailsComponent},
  { path: 'eventoList', component: EventosListComponent},
  { path: 'addEvento', component: AddEventoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
