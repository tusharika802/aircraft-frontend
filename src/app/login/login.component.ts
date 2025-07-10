import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  login(): void {
    const payload = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('https://localhost:7227/api/Account/login', payload).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.loginSuccess.emit();
      },
      error: () => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
