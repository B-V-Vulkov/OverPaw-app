import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AccountService } from 'src/app/core/services/account.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        AccountService,
    ]
})
export class LoginModule { }
