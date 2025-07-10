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
            console.log('Login response:', res); // ✅ Add this line to confirm response

      localStorage.setItem('token', res.token);
      localStorage.setItem('username', res.username);
      localStorage.setItem('profileImage', res.profileImage || ''); // ✅ Save the image URL
      this.loginSuccess.emit();
    },
    error: () => {
      this.errorMessage = 'Invalid credentials';
    }
  });
}

}
