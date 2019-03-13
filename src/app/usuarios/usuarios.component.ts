
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../auth/User';
import {ApiService} from '../App.Service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit {
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource<User>();

  constructor(private apiService: ApiService) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  rowClicked(row: any): void {
    console.log(row);
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
        // this.length = data.result.length;
      }
    );
  }
}

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
  {position: 6, firstName: 'ann', lastName: 'uiol', email: 'john@gmail.com'},
  {position: 7, firstName: 'zabel', lastName: 'resd', email: 'mike@gmail.com'},
  {position: 8, firstName: 'roger', lastName: 'fres', email: 'ricky@gmail.com'},
  {position: 9, firstName: 'bill', lastName: 'cres', email: 'martin@gmail.com'},
  {position: 10, firstName: 'tim', lastName: 'eres', email: 'tom@gmail.com'}
];



