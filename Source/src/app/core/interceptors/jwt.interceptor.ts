import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let jwt = localStorage.getItem('jwt');

        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${jwt}`
            }
        });

        return next.handle(request);
    }
}
