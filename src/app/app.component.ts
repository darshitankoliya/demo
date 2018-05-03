import { Component,OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent implements OnInit {
  title = 'app';

public Product = []
  constructor(private _employeeService: EmployeeService ) {}

ngOnInit() {
  this._employeeService.getproduct() 
      .subscribe((data:any) =>{
        this.Product = data;
      
    }
  );  
  }
}