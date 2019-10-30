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
  editid : any;
  editRowIndex: any;
  model: any = {};
  employees = [
    { name: 'Kevin', position: 'Front-End Dev' },
    { name: 'Michael', position: 'Recruiter Manager' },
    { name: 'Neil', position: 'Bar Tender' }
  ];

  ngOnInit() {
  }
  addNewEmployeeBtn() {
    this.newEmployeeClicked = true;
    this.model = {};
  }
  addEmployee(name, position) {  
    
    this.model = {
      name: name,
      position: position
    }
    this.employees.push(this.model);  
    this.model = {};
    this.newEmployeeClicked = false;
  }
  delete(index) {
    this.employees.splice(index,1);
    this.model = {};
  }
  edit(emp,index) {
    this.editRowIndex = index;
    this.model.name = emp.name;
    this.model.position = emp.position;
   }
   update(name,position,index) {
    this.employees[index].name = name;
    this.employees[index].position = position;
    this.editRowIndex = -1;
   }

}
