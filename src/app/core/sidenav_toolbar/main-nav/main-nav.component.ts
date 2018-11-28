import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, ViewChild, ElementRef, OnDestroy, OnInit} from '@angular/core';

import {NavItem} from './../nav-item';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit ,OnDestroy {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  isLoggedIn$: Observable<boolean>;

  /**SideNav */
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  /**SideNav */

  onLogout(){
    this.authService.logout();
  }

  navSigecu: NavItem[] = [
    {
      displayName: 'Eventos',
      iconName: 'event',
      children: [
        {
          displayName: 'Dashborad Eventos',
          iconName: 'dashboard',
          route: 'material-design'//Pendiente
        },
        {
          displayName: 'Crear Evento',
          iconName: 'create',
          route: 'addEvento'
        },
        {
          displayName: 'Ver  Listado de Eventos',
          iconName: 'format_list_bulleted',
          route: 'eventoList'
        }/*,
        {
          displayName: 'Cancelar Eventos',
          iconName: 'delete',
          route: 'material-design'//Pendiente
        }*/
      ]
    },
    {
      displayName: 'Cursos',
      iconName: 'school',
      children: []
    },
    {
      displayName: 'Lugares',
      iconName: 'location_city',
      children: []
    },
    {
      displayName: 'Instructores',
      iconName: 'supervisor_account',
      children: [
        {
          displayName: 'Crear curso',
          iconName: 'create',
          route: ''
        },
        {
          displayName: 'Ver  Listado de Cursos',
          iconName: 'format_list_bulleted',
          route: ''
        }
      ]
    }
  ];

}
