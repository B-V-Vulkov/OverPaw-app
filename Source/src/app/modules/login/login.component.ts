import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public test: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  get() {
    this.authenticationService.get().subscribe(result => {
      console.log(result);
    });
  }

  login() {
    this.authenticationService.login().subscribe(result => {
      console.log(result);
    });
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
        setHeaders: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',

        }
    });
}

}
