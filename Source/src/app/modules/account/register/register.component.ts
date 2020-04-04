import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { ThrowStmt } from '@angular/compiler';

const namePattern: RegExp = /^[^\s|0-9|\'|\"|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\[|\]|\{|\}|\,|\.|\<|\>|\?|\/|\\|\'|\"|\;|\:|\№].*$/;
const emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const usernamePattern: RegExp = /^[^\s | \\ | \/].*$/;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;

    public isEmailTaken: boolean;
    public isUsernameTaken: boolean;

    public email: string;
    public userName: string;

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

    onSubmitRegisterForm() {

        this.accountService.register(this.registerForm.value).subscribe(result => {
            if (result.status == 1) {
                this.navigateToLogin();
            }
            else {
                this.isEmailTaken = result.isEmailTaken;
                this.isUsernameTaken = result.isUsenameTaken;
                this.email = this.registerForm.controls.email.value;
                this.userName = this.registerForm.controls.username.value;
            }
        });
    }

    navigateToLogin() {
        this.router.navigate(['./account/login']);
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

    addConfirmPasswordValidationClass() {
        let control: AbstractControl = this.registerForm.controls.confirmPassword;
        if (!control.touched || this.registerForm.controls.password.value == null) {
            return '';
        }
        if (control.value === this.registerForm.controls.password.value) {
            return 'is-valid';
        }
        return 'is-invalid';
    }
}
