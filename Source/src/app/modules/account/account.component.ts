import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { accountPageAnimation } from 'src/app/core/animations/account-page.animation';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    animations: [accountPageAnimation]
})
export class AccountComponent {

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
