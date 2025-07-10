import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aircraftproject';
  drawerOpened = true;
  selectedMenu = 'Dashboard';
  isLoggedIn = false;
  showLoginPopup = false;

  menuItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Contracts', path: '/contract' },
    { text: 'Parts', path: '/parts' },
    { text: 'Service Centres', path: '/servicecentre' },
    { text: 'Partners', path: '/partner' },
    { text: 'Staff', path: '/staff' },
  ];

  constructor(private router: Router) {}
userName = '';
profileImage = '';

ngOnInit(): void {
  const token = localStorage.getItem('token');
  if (!token) {
    this.showLoginPopup = true;
  } else {
    this.isLoggedIn = true;
    this.userName = localStorage.getItem('username') || '';
    this.profileImage = localStorage.getItem('profileImage') || '';
    this.router.navigate(['/dashboard']);
  }
}

onLoginSuccess(): void {
  this.isLoggedIn = true;
  this.showLoginPopup = false;
  this.userName = localStorage.getItem('username') || '';
  this.profileImage = localStorage.getItem('profileImage') || '';
  this.router.navigate(['/dashboard']);
}

  // ngOnInit(): void {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     this.showLoginPopup = true; // show login modal on first load
  //   } else {
  //     this.isLoggedIn = true;
  //     this.router.navigate(['/dashboard']); // optional: auto redirect
  //   }
  // }

  // onLoginSuccess(): void {
  //   this.isLoggedIn = true;
  //   this.showLoginPopup = false;
  //   this.router.navigate(['/dashboard']);
  // }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    window.location.reload();
  }

  onMenuClick(e: any): void {
    this.selectedMenu = e.itemData.text;
    if (e.itemData.path) {
      this.router.navigateByUrl(e.itemData.path);
    }
  }
}
