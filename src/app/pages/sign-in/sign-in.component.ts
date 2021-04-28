import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Client} from '../../my-objects/client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  get login() {
    return this.signInForm.get('login') as FormControl;
  }

  get password() {
    return this.signInForm.get('password') as FormControl;
  }

  signIn() {
    this.authService.getByLoginAndPassword(this.signInForm.getRawValue()).subscribe(res => {
      let clients: Client[] = res;

      if (clients.length !== 0) {
        this.authService.setAuth(true);
        this.authService.setUserId(clients[0].id);
        this.router.navigate(['/profile/personal-info']);
      }
    });
  }
}
