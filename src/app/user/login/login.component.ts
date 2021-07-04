import { AlertService } from './../../shared/services/alert.service';
import { AuthService } from './../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { addEffectMenu } from 'src/app/store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegister = false;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<MenuState>,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.addEffectToMenu();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', this.isRegister ? Validators.required : null]
    });
  }

  addEffectToMenu(): void {
    this.store.dispatch(addEffectMenu());
  }

  login(): void {
    const { email, password } = this.form.value;

    this.authService.SignIn(email, password)
      .subscribe(
        () => this.router.navigate(['']),
        error => this.alertService.alertError(error?.message)
      );
  }
}
