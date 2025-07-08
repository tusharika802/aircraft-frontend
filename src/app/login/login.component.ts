import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl:'./login.component.scss'
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();

  login() {
    // Handle login logic here
    this.close.emit(); // Close popup after login
  }
}
