import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/core/services/authentication.service';

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

  post() {
    this.authenticationService.post().subscribe(result => {
      console.log(result);
    });
  }

}
