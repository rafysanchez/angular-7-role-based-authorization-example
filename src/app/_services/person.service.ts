import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Person } from '@/_models';

//import * as exampleData from '../data/data.json';
@Injectable({ providedIn: 'root' })
export class PersonService {
    
     person: Person[] = [
        { id: 1,  firstName: 'Admin', lastName: 'Portamel' },
        { id: 2,  firstName: 'Normal', lastName: 'RadjaM' },
        { id: 3,  firstName: 'ZAGO', lastName: 'ULMANN' },
        { id: 4,  firstName: 'Caye', lastName: 'Zilma' }
    ];
    constructor(private http: HttpClient) {   }

    getAll() {
        
        return this.person; // this.http.get<Person[]>('../data/data.json');
    }

    getById(id: number) {
        return this.http.get<Person>('data../data/.json/${id}');
    }

    
    public getJSON(): any {
        const studentsObservable = new Observable(observer => {
               setTimeout(() => {
                   observer.next(this.person);
               }, 1);
        });
   
        return studentsObservable;
    }
}