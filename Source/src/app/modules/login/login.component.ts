import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from 'src/app/core/services/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    public isInvalidLoginData: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private accountService: AccountService) {

        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            isSelectedRememberMe: ['']
        });
    }

    ngOnInit(): void {

        this.loginForm.patchValue({
            isSelectedRememberMe: true
        });
    }

    onSubmitLoginForm() {
        console.log(this.loginForm.value);
        this.accountService.login(this.loginForm.value).subscribe(result => {

            if (result.status == 1) {
                localStorage.setItem('jwt', result.token);
                this.router.navigate(['']);
            }
            else {
                this.isInvalidLoginData = true;
            }
        });
    }

    test() {

        this.accountService.test().subscribe(result => {
            console.log(result);
        })
    }




}
