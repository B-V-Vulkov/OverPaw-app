import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
