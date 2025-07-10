import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
  const payload = {
    username: this.username,
    password: this.password,
  };

  this.http.post<any>('https://localhost:7227/api/Account/login', payload).subscribe({
    next: (res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']); // ✅ Redirect after login
    },
    error: () => {
      this.errorMessage = 'Invalid credentials';
    },
  });
}
logout(): void {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

}
