import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private apiUrl: string = environment.apiUrl;
    private controler: string = "api/Account";

    constructor(private httpService: HttpClient) { }

    public post() {
        const url = `http://localhost:9207/api/Account/login`;

        localStorage.setItem('Test', 'TestTocen');

        const data: any = {
            UserName: 'Bobi',
            UserPass: 'dsdsdsd@sddff'
        }
    
        return this.httpService.post<any>(url, data);
    }

    public get() {
        const url = `http://localhost:9207/api/Account/get`;
        return this.httpService.get<number>(url);
    }




}
