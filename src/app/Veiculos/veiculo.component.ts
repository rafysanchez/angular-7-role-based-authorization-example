import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, } from 'rxjs';
import { Person } from '../_models/person';
import { PersonService } from '@/_services';

//import 'rxjs/add/operator/map';

@Component({ templateUrl: './veiculo.component.html' })
export class VeiculoComponent implements OnDestroy, OnInit {
    dtOptions: DataTables.Settings = {};
    persons: Person[] = [];

    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<Person> = new Subject();
    error: string;
    dados;
    
    constructor(private http: HttpClient, private personService: PersonService) { }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.getAll();
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    private getAll() {
        debugger;
        // this.personService.getJSON().subscribe(data => {
        //     this.persons = data;
        //     console.log(data);
       
            const studentsObservable = this.personService.getJSON();
        studentsObservable.subscribe((studentsData: Person[]) => {
            this.persons = studentsData;
        });
    
   };

}
