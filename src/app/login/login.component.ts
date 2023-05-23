import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  constructor(private route: Router) {

  }

  login(loginForm: NgForm) {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Login Successful');
      this.route.navigate(['/rooms']);
      loginForm.reset();
    }
  }
}
