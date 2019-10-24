import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router:Router) { }
  newEmployeeClicked = false;
  editClick = false;
  employees = [
    { name: 'Kevin', position: 'Front-End Dev' },
    { name: 'Michael', position: 'Recruiter Manager' },
    { name: 'Neil', position: 'Bar Tender' }
  ];

  ngOnInit() {
  }
  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked
  }
  edit(i){
    this.router.navigate(["crud"]);
  }
  delete(i){
    this.employees.splice(i);
    console.log(i);
  }
}
