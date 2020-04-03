import { trigger, transition, animate, style } from '@angular/animations';

export const accountPageAnimation = trigger('routeAnimations', [
    transition('loginPage <=> *, registerPage <=> *', [
        style({ opacity: 0 }),
        animate(400,
            style({ opacity: 1 })
        )
    ]),
]);
