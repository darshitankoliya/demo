import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../models/product.model";
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public Product = [];
  public ProductId;
  constructor(private _employeeService: EmployeeService, private Route: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    //let id = parseInt(this.Route.snapshot.paramMap.get('id'));
    //this.ProductId = id;
    this.Route.paramMap.subscribe((params) => {
      let id = parseInt(params.get('id'));
      this.ProductId = id;

    });
  }
  goPrevious() {
    let goPreviousId = this.ProductId - 1;
    this.route.navigate(['/product', goPreviousId]);
  }
  goNext() {
    let goNextId = this.ProductId + 1;
    this.route.navigate(['/product', goNextId]);
  }
  goBack() {
    let selectedId = this.ProductId ? this.ProductId : null;
    this.route.navigate(['/product',{ id: selectedId }], {relativeTo: this.Route});
  }
  onOverview() {
    this.route.navigate(['overview'], { relativeTo: this.Route});
  }               
  onContact() {
    this.route.navigate(['contact'], { relativeTo: this.Route});
  }



}

