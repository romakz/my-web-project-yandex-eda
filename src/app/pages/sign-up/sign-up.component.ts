import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Client} from '../../my-objects/client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    imageUrl: ['assets/images/logos/account-profile.webp'],
    telephone: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {}

  get login() {
    return this.signUpForm.get('login') as FormControl;
  }

  get password() {
    return this.signUpForm.get('password') as FormControl;
  }

  get firstName() {
    return this.signUpForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.signUpForm.get('lastName') as FormControl;
  }

  get telephone() {
    return this.signUpForm.get('telephone') as FormControl;
  }

  signUp() {
    this.authService.getByLogin(this.signUpForm.getRawValue()).subscribe(res => {
      let clients: Client[] = res;

      if (clients.length === 0) {
        this.clientService.createNewClient(this.signUpForm.getRawValue()).subscribe(res2 => {
          this.authService.setAuth(true);
          this.authService.setUserId(res2.id);
          this.router.navigate(['/profile/personal-info']);
        });
      }
    });
  }

}
