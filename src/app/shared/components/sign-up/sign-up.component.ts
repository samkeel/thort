import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = this.fb.group({
    email: [
      '',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' },
    ],
    password: ['', { validators: [Validators.required] }],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  get email() {
    return this.signUpForm.controls['email'];
  }

  get password() {
    return this.signUpForm.controls['password'];
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email must be filled out';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    const email = this.email.value;
    const password = this.password.value;

    this.userService.signUpNewUserEmail({
      email: email,
      password: password,
    });
  }
}
