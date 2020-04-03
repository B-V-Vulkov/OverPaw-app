import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from 'src/app/core/services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    public animationState: string = "beginner";

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
        this.animationState = "beginner";
        

    }

    ngAfterViewInit() {
        this.animationState = 'normal';
    }

    onSubmitLoginForm() {
    }

    navigateToLogin() {


        this.router.navigate(['./login']);
    }



}
