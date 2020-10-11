import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id": 1,
      "firstName": "Sergio",
      "lastName": "Ruy",
      "emailId": "sergioruy@gmail.com"
    },
      {
        "id": 2,
        "firstName": "Andressa",
        "lastName": "Mayle",
        "emailId": "andressamayle@gmail.com"
      },
      {
        "id": 3,
        "firstName": "Julia",
        "lastName": "Coutinho",
        "emailId": "juliacoutinho@hotmail.com"
      }];

  }
}
