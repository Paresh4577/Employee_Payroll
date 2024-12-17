import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import path from 'path';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { AdvanceComponent } from './Components/advance/advance.component';
import { LeavesComponent } from './Components/leaves/leaves.component';
import { SalaryComponent } from './Components/salary/salary.component';
import { AddEditEmployeeComponent } from './Components/add-edit-employee/add-edit-employee.component';
import { DetailEmpComponent } from './Components/detail-emp/detail-emp.component';
import { AddEditAttendanceComponent } from './Components/add-edit-attendance/add-edit-attendance.component';
import { AddEditSalaryComponent } from './Components/add-edit-salary/add-edit-salary.component';
import { AddEditLeaveComponent } from './Components/add-edit-leave/add-edit-leave.component';
import { AddEditAdvanceComponent } from './Components/add-edit-advance/add-edit-advance.component';

const routes: Routes = [
  {path : 'login' , component:LoginComponent},
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'AddEmployee',
        component:AddEditEmployeeComponent
      },
      {
        path:'attendance',
        component:AttendanceComponent
      },
      {
        path:'advance',
        component:AdvanceComponent
      },
      {
        path:'leaves',
        component:LeavesComponent
      },
      {
        path:'salary',
        component:SalaryComponent
      },
      {
        path:'Emp/:empId',
        component:DetailEmpComponent
      },
      {
        path:'EmpEdit/:empId',
        component:AddEditEmployeeComponent
      },
      {
        path:'attendance',
        component:AttendanceComponent
      },
      {
        path:'Fill_Attendance',
        component:AddEditAttendanceComponent
      },
      { 
        path:'Edit_Attendance/:attendanceId',
        component:AddEditAttendanceComponent
      },
      {
        path:'Salary',
        component:SalaryComponent
      },
      {
        path:'addSalary',
        component:AddEditSalaryComponent
      },
      {
        path:'Edit_Salary/:salaryId',
        component:AddEditSalaryComponent
      },
      {
        path:'addLeave',
        component:AddEditLeaveComponent
      },
      {
        path:'EditLeave/:LeaveId',
        component:AddEditLeaveComponent
      },
      {
        path:'allLeaves',
        component:LeavesComponent        
      },
      {
        path:'advance',
        component:AdvanceComponent
      },
      {
        path:'addadvance',
        component:AddEditAdvanceComponent
      },
      {
        path:'EditAdavnce/:AdvanceId',
        component:AddEditAdvanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
