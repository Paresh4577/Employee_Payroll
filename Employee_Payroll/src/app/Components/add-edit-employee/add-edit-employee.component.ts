import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formToJSON } from 'axios';



@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})
export class AddEditEmployeeComponent {

  constructor(private empsrv : EmployeeService,private router:Router,private activatedRoute:ActivatedRoute) { }
  id = -1;
  employee = {
    empId: 0,
    empName: ' ',
    empContactNo: '',
    empAltContactNo: '',
    empEmail: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: '',
    state: '',
    bankName: '',
    ifsc: '',
    accountNo: '',
    bankBranch: '',
    salary: 0.0
  };

  save(form:any){
    if(this.id==0){
      this.empsrv.AddNewEmployee(form).subscribe((res:any)=>{
        this.router.navigate(['/employee']);
      })
    }
    else{
      this.empsrv.UpdateEmp(this.id,form).subscribe((res:any)=>{
        this.router.navigate(['/employee']);
      })
    }
  }

  ngOnInit(){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('empId'));
    if(this.id>0){
      this.empsrv.getByIDEmp(this.id).subscribe((res:any)=>{
        this.employee.empId = res.empId;
        this.employee.empName = res.empName;
        this.employee.empContactNo = res.empContactNo;
        this.employee.empAltContactNo = res.empAltContactNo;
        this.employee.empEmail = res.empEmail;
        this.employee.addressLine1 = res.addressLine1;
        this.employee.addressLine2 = res.addressLine2;
        this.employee.pincode = res.pincode;
        this.employee.city = res.city;
        this.employee.state = res.state;
        this.employee.bankName = res.bankName;
        this.employee.ifsc = res.ifsc;
        this.employee.accountNo = res.accountNo;
        this.employee.bankBranch = res.bankBranch;
        this.employee.salary = res.salary;
      })  
    } 
  }
}
