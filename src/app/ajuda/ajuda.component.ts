import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService } from '@/_services';

@Component({styleUrls:['ajuda.component.css'], templateUrl: 'ajuda.component.html' })
export class AjudaComponent {
  

    // constructor(private userService: UserService) { }

/*     ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    } */
}