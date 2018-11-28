import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '../../node_modules/@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';
import { EventosDetailsComponent } from './modules/eventos/components/evento-details/eventos-details.component';
import { EventosListComponent } from './modules/eventos/components/eventos-list/eventos-list.component';
import { AddEventoComponent } from './modules/eventos/components/add-evento/add-evento.component';
import { EditEventoComponent } from './modules/eventos/components/edit-evento/edit-evento.component';

const routes: Routes = [
  { path: 'eventoList', component: EventosListComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: LoginComponent },
  { path: 'evento', component: EventosDetailsComponent },
  { path: 'addEvento', component: AddEventoComponent },
  { path: 'editEvento', component: EditEventoComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'eventoList' }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
