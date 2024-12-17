import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { attendance, IAttendance } from '../../Classes/employee';

@Component({
  selector: 'app-add-edit-attendance',
  templateUrl: './add-edit-attendance.component.html',
  styleUrl: './add-edit-attendance.component.css'
})
export class AddEditAttendanceComponent {
  constructor(private empsrv:EmployeeService,private router:Router,private activatedRoute:ActivatedRoute) { }
 
  attendanceArray : IAttendance[] = [];
 attendanceObj : attendance = new attendance();

 employeeArray:any = [];
  
 attendanceId = 0;
  attendance = {
    attendanceId : 0,
    empId: 0,
    attendanceDate: undefined,
    inTime : undefined,
    outTime: undefined,
    isFullDay: false
  };
  
  ngOnInit() {
    this.attendanceId = Number(this.activatedRoute.snapshot.paramMap.get('attendanceId'));
    this.loadEmployees();
    
    if(this.attendanceId!=0){
      this.getAttendance();
      this.attendance.attendanceId;
    }
    
  }

loadEmployees() {
this.empsrv.getAllEmployee().subscribe((res: any) => {
 this.employeeArray = res;
});
}
 
getAttendance(){
  this.empsrv.getByIdAttendance(this.attendanceId).subscribe((res:any)=>{
    this.attendanceObj= res;
  })
}

  save(){
   if(this.attendanceId!=0){
      this.empsrv.UpdateAttendance(this.attendanceId,this.attendanceObj).subscribe((res:any)=>{
        this.router.navigate(['/attendance']);
      })
    }
    else{
      this.empsrv.FillNewAttendance(this.attendanceObj).subscribe((res:any)=>{
        this.router.navigate(['/attendance']);
      })
    }
  }
  
 

  // ngOnInit(){
  //   this.id = Number(this.activatedRoute.snapshot.paramMap.get('attendanceId'));
  // }
}
