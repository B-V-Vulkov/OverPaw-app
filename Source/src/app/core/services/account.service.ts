import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { loginResponseModel } from '../models/responseModels/account/login-response-model';
import { registerResponseModel } from '../models/responseModels/account/register-response-model';

const accountControler: string = environment.accountControler;

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private httpService: HttpClient) { }

    public login(data: any): Observable<loginResponseModel> {
        const url = `${accountControler}/login`;
        return this.httpService.post<loginResponseModel>(url, data);
    }

    public register(data: any): Observable<registerResponseModel> {
        const url = `${accountControler}/register`;
        return this.httpService.post<registerResponseModel>(url, data);
    }

}
