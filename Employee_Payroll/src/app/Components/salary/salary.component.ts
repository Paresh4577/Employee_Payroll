import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent{
  constructor(private empsrv:EmployeeService,private router:Router){}
 salaryArray:any;
  ngOnInit():void{
    this.GetAllSalary();
  }

  GetAllSalary(){
    this.empsrv.getAllSalaryWithEmp().subscribe((res:any)=>{
      this.salaryArray = res;
    })
  }

  deleteSalary(salaryId:any){
    this.empsrv.DeleteSalary(salaryId).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

  redirect(id:any){
    this.router.navigate(["Edit_Salary/"+id]);
  }
}
