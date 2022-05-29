import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInform = this.fb.group({
    email: [
      '',
      { validators: [Validators.required, Validators.email], updateOn: 'blur' },
    ],
    password: ['', { validators: [Validators.required] }],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
  }

  get email() {
    return this.signInform.controls['email'];
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email must be filled out';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get password() {
    return this.signInform.controls['password'];
  }

  onSubmit() {
    const email = this.email.value;
    const password = this.password.value;

    this.userService.login({
      email: email,
      password: password,
    });
  }

}
