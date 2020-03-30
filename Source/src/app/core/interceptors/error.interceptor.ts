import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            tap(evt => { }, (error: HttpErrorResponse) => {

                switch (error.status) {
                    case 404:
                        this.router.navigate(['./notFound']);
                        break;
                    case 500:
                        this.router.navigate(['./serverError']);
                        break;
                }
            })
        );
    }
}
