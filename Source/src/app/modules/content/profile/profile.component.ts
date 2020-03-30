import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public userName: string;

    constructor(private route: ActivatedRoute, ) {
        this.userName = this.route.snapshot.paramMap.get("userName");
     }

    ngOnInit(): void {

    }
}
