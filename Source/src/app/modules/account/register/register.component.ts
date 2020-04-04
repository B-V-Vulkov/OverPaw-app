import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';

const namePattern: RegExp = /^[^\s|0-9|\'|\"|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\[|\]|\{|\}|\,|\.|\<|\>|\?|\/|\\|\'|\"|\;|\:|\№].*$/;
const emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const usernamePattern: RegExp = /^[^\s | \\ | \/].*$/;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    public isUsernameTaken: boolean;

    public registerForm: FormGroup;

    public isInvalidLoginData: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private accountService: AccountService) {

        this.registerForm = this.formBuilder.group({
            firstName: [null, [Validators.required, Validators.pattern(namePattern)]],
            familyName: [null, [Validators.required, Validators.pattern(namePattern)]],
            email: [null, [Validators.required, Validators.pattern(emailPattern)]],
            username: [null, [Validators.required, Validators.pattern(usernamePattern)]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
        });
    }


    ngOnInit(): void {
    }

    addValidationClass(control: AbstractControl): string {
        if (!control.touched) {
            return '';
        }
        if (control.valid) {
            return 'is-valid';
        }
        return 'is-invalid';
    }

    isInvalidAndTouched(control: AbstractControl): boolean {
        return (control.invalid && control.touched);
    }

    test(abstractControl: AbstractControl): boolean {
        return (abstractControl.valid && abstractControl.touched);
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
