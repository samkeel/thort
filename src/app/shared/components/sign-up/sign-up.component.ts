import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../../animations/route-animations';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BpObserverService } from '../../services/bp-observer.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [routeFadeStateTrigger],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
})
export class SignUpComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeAnimation = true;

  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  signUpForm = this.fb.group(
    {
      email: ['', { validators: [Validators.required, Validators.email] }],
      password: [
        '',
        { validators: [Validators.minLength(8), Validators.required] },
      ],
    },
    { updateOn: 'blur' }
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService,
    private bpoService: BpObserverService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  get email() {
    return this.signUpForm.controls['email'];
  }

  get password() {
    return this.signUpForm.controls['password'];
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email must be filled out';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.getError('required')) {
      return 'Password required';
    } else if (this.password.getError('minlength')) {
      return 'Password minimum length 8 chars';
    }
    return this.password.hasError('password') ? 'password error' : '';
  }

  loginLink() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    const email: string = this.email.value as string;
    const password: string = this.password.value as string;

    this._userService.signUpNewUserEmail({
      email: email,
      password: password,
    });
  }
}
