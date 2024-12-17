import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
      constructor(private empsrv: EmployeeService,private router : Router,private  dialog:MatDialog){}
      empArr = [
        {
          empId: 0,
          empName: '',
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
          salary: 0
        }
      ]

      // ngOnInit(){
      //   this.empsrv.getAllEmployee().subscribe((res:any)=>{
      //       this.empArr = res;
      //   });
      // }

      
      ngOnInit() {
         this.loadEmployees();
       }

  loadEmployees() {
    this.empsrv.getAllEmployee().subscribe((res: any) => {
      this.empArr = res;
    });
  }

  deleteEmp(empId:any){
    this.empsrv.DeleteEmp(empId).subscribe(()=>{
      this.ngOnInit();
    })
  }

  GetByIDEmployee(empId:any){
    this.empsrv.getByIDEmp(empId).subscribe((res:any)=>{
      this.empArr = res;
      this.router.navigate(['Emp/'+empId]);
    })
  }
  
  
      
}
