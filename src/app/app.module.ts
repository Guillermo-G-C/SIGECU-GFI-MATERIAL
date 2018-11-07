import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModuleModule } from './/material-module.module';
import { MainNavComponent } from './core/sidenav_toolbar/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
