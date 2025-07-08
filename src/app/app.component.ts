import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aircraftproject';
  drawerOpened = true; // for toggle
  selectedMenu = 'Dashboard';
  constructor(private router: Router) {}

  menuItems = [
  { text: 'Dashboard', path: '/dashboard' },
    { text: 'Contracts' },
    { text: 'Parts' },
    { text: 'Service Centres' },
    { text: 'Partners' }
  ];

  onMenuClick(e: any): void {
this.selectedMenu = e.itemData.text;
 if (e.itemData.path) {
      this.router.navigateByUrl(e.itemData.path);
    }   }
}