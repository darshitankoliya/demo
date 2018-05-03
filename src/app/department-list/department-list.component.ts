import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  displayName = false;
  displayName1 = false;
  displayName2 = false;
  displayName3 = false;


  constructor() { }

  ngOnInit() {
  }
}
