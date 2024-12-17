import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-leave',
  templateUrl: './add-edit-leave.component.html',
  styleUrl: './add-edit-leave.component.css'
})
export class AddEditLeaveComponent {
  LeaveObj:any ={};
  EmployeeObj :any=[];

  LeaveId = 0;
  constructor(private apiSer : EmployeeService,private router:Router,private actRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.LeaveId = Number(this.actRoute.snapshot.paramMap.get('LeaveId'));

    this.loadEmployee();

    if(this.LeaveId !=0){
      this.loadLeave();
    }
  }

  loadEmployee(){
    this.apiSer.getAllEmployee().subscribe((res:any)=>{
      this.EmployeeObj = res;
    });
  }

  loadLeave(){
    this.apiSer.getByIdLeave(this.LeaveId).subscribe((res:any)=>{
      this.LeaveObj = res;
    });
  }

  saveMe(){
    if(this.LeaveId != 0){
      this.apiSer.updateByIdLeave(this.LeaveId,this.LeaveObj).subscribe((res:any)=>{
        this.router.navigate(['allLeaves']);
      });
    }else{
      this.apiSer.insertLeave(this.LeaveObj).subscribe((res:any)=>{
        this.router.navigate(['allLeaves']);
      });
    }
  }
}
