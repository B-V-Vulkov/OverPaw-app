import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: '500',
        loadChildren: () => import('./modules/server-error/server-error.module').then(m => m.ServerErrorModule)
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
