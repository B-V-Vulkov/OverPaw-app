import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent, data: { animation: 'loginPage' } },
            { path: 'register', component: RegisterComponent, data: { animation: 'registerPage' } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
