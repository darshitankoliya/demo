import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee.ServiceComponent } from './employee.service.component';

describe('Employee.ServiceComponent', () => {
  let component: Employee.ServiceComponent;
  let fixture: ComponentFixture<Employee.ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee.ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
