import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-chjs',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class Login1Component implements OnInit {
  form: any = {
    username: null,
    password: null,
  };

  @Input() isLoggedIn: any;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}

  reloadPage(): void {
    window.location.href = '/';
    // window.location.reload();
  }

  logout(): void {
    window.location.reload();
  }
}
