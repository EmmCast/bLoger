import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (!this.userName.trim()) {
      alert('Ingresa un nombre de usuario');
      return;
    }

    localStorage.setItem('currentUser', this.userName.trim());
    this.router.navigate(['/dashboard']);
  }
}