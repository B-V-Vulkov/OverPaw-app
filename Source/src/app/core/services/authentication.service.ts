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

    public login() {
        const url = `https://localhost:44387/api/Account/login`;
        
        const data: any = {
            UserName: 'Bobi',
            UserPass: 'dsdsdsd@sddff'
        }
    
        return this.httpService.post<any>(url, data);
    }

    public get() {
        const url = `https://localhost:44387/api/Account/get`;
        return this.httpService.get<number>(url);
    }
}
