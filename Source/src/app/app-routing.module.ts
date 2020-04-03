import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/account/login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/content/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'profile/:userName',
        loadChildren: () => import('./modules/content/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'account',
        loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'serverError',
        loadChildren: () => import('./modules/server-error/server-error.module').then(m => m.ServerErrorModule)
    },
    {
        path: 'notFound',
        loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
    },
    {
        path: '**',
        loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
