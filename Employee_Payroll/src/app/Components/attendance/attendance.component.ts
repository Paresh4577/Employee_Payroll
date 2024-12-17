import { Component } from '@angular/core';
import { attendance, IAttendance } from '../../Classes/employee';
import { EmployeeService } from '../../employee.service';
import { HttpClient } from '@angular/common/http';
import { Console } from 'node:console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
 
//   attendanceObj : attendance = new attendance();

//  employeeArray:any = [];
 constructor(private empSrv:EmployeeService,private router:Router){}
 attendanceArray:any;
  ngOnInit():void{
      this.getAllAttendance();
   //  this.getEmployee();
  }

  // getEmployee(){
  //   this.empSrv.getAllEmployee().subscribe((res:any)=>{
  //     this.employeeArray = res.data;
  //   })
  // }
  
  getAllAttendance(){
    this.empSrv.GetAttendanceWithEmployee().subscribe((res:any)=>{
      this.attendanceArray = res;
    })
  }
  
  deleteAttendance(attendanceId:any){
    this.empSrv.DeleteAttendance(attendanceId).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

  // editAttendance(attendanceId:any){
    
  // }
 
  redirect(id:any){
    this.router.navigate(["Edit_Attendance/"+id]);
  }
}
