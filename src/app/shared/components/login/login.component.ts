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
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BpObserverService } from '../../services/bp-observer.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeAnimation = true;

  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  signInForm = this.fb.group({
    email: [
      '',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' },
    ],
    password: ['', { validators: [Validators.required] }],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService,
    private bpoService: BpObserverService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }

  get email() {
    return this.signInForm.controls['email'];
  }

  get password() {
    return this.signInForm.controls['password'];
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email must be filled out';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUpLink() {
    this.router.navigate(['signup'])
  }

  onSubmit(){
    
  }

}
