import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';

import { MainNavComponent } from './sidenav_toolbar/main-nav/main-nav.component';
import { MenuListItemComponent } from './sidenav_toolbar/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    MainNavComponent,
    MenuListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule
  ],
  exports: [
    MainNavComponent,
    MenuListItemComponent,
  ],
})
export class CoreModule { }
