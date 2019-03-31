import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService } from '@/_services';

@Component({ templateUrl: 'morador.component.html' })
export class MoradorComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
       
    }
}