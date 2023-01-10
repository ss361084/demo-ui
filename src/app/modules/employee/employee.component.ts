import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.getAllEmployee();
  }

  private getAllEmployee() {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      console.log(response);
    });
  }
}
