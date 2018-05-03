import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public title = "product works!";
  products = [
    { "id": 1, "name": "1 . button" },
    { "id": 2, "name": "2 . button" },
    { "id": 3, "name": "3 . button" },
    { "id": 4, "name": "4 . button" },
    { "id": 5, "name": "5 . button" }
  ]
  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {

  }
  onSelect(product) {
    this.router.navigate(['/product', product.id]);
  }
}
