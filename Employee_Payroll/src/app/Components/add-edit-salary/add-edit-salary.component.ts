import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-salary',
  templateUrl: './add-edit-salary.component.html',
  styleUrl: './add-edit-salary.component.css'
})
export class AddEditSalaryComponent {
  constructor(private empsrv:EmployeeService,private router:Router,private activatedRoute:ActivatedRoute) { }

 employeeArray:any = [];
 salaryArray:any;
 
 salaryId = 0;
 salaryObj = {
    salaryId : 0,
    empId: 0,
    salaryDate: undefined,
    totalAdvance : 0,
    presentDays: 0,
    salaryAmount: 0
  };

  ngOnInit() {
    this.salaryId = Number(this.activatedRoute.snapshot.paramMap.get('salaryId'));
    this.loadEmployees();
    
    if(this.salaryId!=0){
      this.GetSalary();
      this.salaryObj.salaryId;
    }
  }
  
  GetSalary(){
    this.empsrv.getByIdSalary(this.salaryId).subscribe((res:any)=>{
      this.salaryObj = res;
    })
  }

  loadEmployees() {
    this.empsrv.getAllEmployee().subscribe((res: any) => {
     this.employeeArray = res;
    });
    }

    save(){
      if(this.salaryId!=0){
         this.empsrv.UpdateSalary(this.salaryId,this.salaryObj).subscribe((res:any)=>{
           this.router.navigate(['/Salary']);
         })
       }
       else{
         this.empsrv.AddnewSalary(this.salaryObj).subscribe((res:any)=>{
           this.router.navigate(['/Salary']);
         })
       }
     }
}
