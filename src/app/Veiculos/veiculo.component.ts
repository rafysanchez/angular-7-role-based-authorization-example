import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService } from '@/_services';

@Component({ templateUrl: 'veiculo.component.html' })
export class VeiculoComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
       
    }
}