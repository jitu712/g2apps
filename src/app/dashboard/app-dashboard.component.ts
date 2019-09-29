import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent {
  apps = [/* {
    name: 'To Do',
    route: '/todo'
  }, */ {
    name: 'Timeline',
    route: '/timeline'
  }/* , {
    name: 'Bhagavad Gita',
    route: '/gita'
  } */, {
    name: 'NEWS',
    route: '/news'
  }
];
}
