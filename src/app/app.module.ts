import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/auth/auth.module';
import { EventosModule } from './modules/eventos.module';
import { EventosRoutingModule } from './modules/eventos-routing.module';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ExampleDashboardComponent } from './example-dashboard/example-dashboard.component';
import { ExampleTreeComponent } from './example-tree/example-tree.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/token.interceptor';
import { ErrorInterceptor } from './core/error-interceptor';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ExampleDashboardComponent,
    ExampleTreeComponent,
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
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX',
    },
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
