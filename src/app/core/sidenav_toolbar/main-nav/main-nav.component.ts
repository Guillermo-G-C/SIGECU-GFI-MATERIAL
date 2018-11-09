import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, ViewChild, ElementRef, OnDestroy} from '@angular/core';

import {NavItem} from './../nav-item';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnDestroy {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  /**SideNav */
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  /**SideNav */

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
          route: 'addEvento'//Pendiente
        },
        {
          displayName: 'Ver  Listado de Eventos',
          iconName: 'format_list_bulleted',
          route: 'eventoList'//Pendiente
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
      children: []
    }
  ];


  /**NavItem */
  navItems: NavItem[] = [
    {
      displayName: 'DevFestFL',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Disney',
      iconName: 'videocam',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'what-up-web'
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Orlando',
      iconName: 'movie_filter',

    },
    {
      displayName: 'Maleficent',
      disabled: true,
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'feedback'
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'feedback'
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    }
  ];

}
