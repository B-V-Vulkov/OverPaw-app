import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public isInvalidLoginData: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService) {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      isSelectedRememberMe: ['']
    });
  }

  ngOnInit(): void {


  }

  onSubmitRegisterForm() {
  }

  registerFormControl() {
    return this.registerForm.controls;
  }

  navigateToLogin() {
    this.router.navigate(['./account/login']);
  }



}
