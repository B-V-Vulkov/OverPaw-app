import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationBarComponent } from './navigation-bar.component';

const routes: Routes = [
    {
        path: '', component: NavigationBarComponent,
        children: [
            { path: 'home', loadChildren: () => import('../../landings/home/home.module').then(m => m.HomeModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationBarRoutingModule { }
