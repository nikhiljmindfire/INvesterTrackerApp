import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  //selector: 'sidenav',
  templateUrl: 'SideMenu.html',
  styleUrls: ['SideMenu.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideMenuComponent {
  side = 'start';
}