import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { EventosModule } from './modules/eventos.module';
import { EventosRoutingModule } from './modules/eventos-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    EventosModule,
    EventosRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
