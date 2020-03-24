import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { NavigationBarComponent } from 'src/app/layouts/navigation-bar/navigation-bar.component';

@NgModule({
    declarations: [
        ContentComponent,
        NavigationBarComponent
    ],
    imports: [
        CommonModule,
        ContentRoutingModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule { }
