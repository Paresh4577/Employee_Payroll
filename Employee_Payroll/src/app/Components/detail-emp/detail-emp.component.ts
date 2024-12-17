import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-emp',
  templateUrl: './detail-emp.component.html',
  styleUrl: './detail-emp.component.css'
})
export class DetailEmpComponent {
  Emp : any;
  constructor(private empsrv:EmployeeService,private router:Router,private activatedParams:ActivatedRoute){}

  empId:any;
  ngOnInit(): void {
    this.empId = this.activatedParams.snapshot.params['empId'];
    this.empsrv.getByIDEmp(this.empId).subscribe((res:any)=>{
      this.Emp = res;
    })
  }


  
  
  deleteEmp(empId:any){
    this.empsrv.DeleteEmp(empId).subscribe((res:any)=>{
      this.router.navigate(['/employee']);
    })
  }
}
