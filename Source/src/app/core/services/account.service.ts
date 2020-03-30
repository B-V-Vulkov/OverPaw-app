import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { loginUserResponseModel } from '../models/responseModels/account/login-user-response-model';

const accountControler: string = environment.accountControler;

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private httpService: HttpClient) { }

    public login(data: any): Observable<loginUserResponseModel>{
        const url = `${accountControler}/login`;
        return this.httpService.post<loginUserResponseModel>(url, data);
    }

    public test(): Observable<any>{
        const url = `test/get`;
        return this.httpService.get<any>(url);
    }
}
