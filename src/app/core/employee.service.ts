import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  origin = environment.origin;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllEmployees() {
    return this.httpClient.get(`${this.origin}/api/employee`);
  }
}
