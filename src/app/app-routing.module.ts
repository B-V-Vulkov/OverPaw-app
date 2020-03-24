import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/content/content.module').then(m => m.ContentModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: '500', loadChildren: () => import('./pages/server-error/server-error.module').then(m => m.ServerErrorModule) },
    { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
