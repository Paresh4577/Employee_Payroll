import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { AdvanceComponent } from './Components/advance/advance.component';
import { LeavesComponent } from './Components/leaves/leaves.component';
import { SalaryComponent } from './Components/salary/salary.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditEmployeeComponent } from './Components/add-edit-employee/add-edit-employee.component';
import { DetailEmpComponent } from './Components/detail-emp/detail-emp.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEditAttendanceComponent } from './Components/add-edit-attendance/add-edit-attendance.component';
import { AddEditSalaryComponent } from './Components/add-edit-salary/add-edit-salary.component';
import { AddEditLeaveComponent } from './Components/add-edit-leave/add-edit-leave.component';
import { AddEditAdvanceComponent } from './Components/add-edit-advance/add-edit-advance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    EmployeeComponent,
    AttendanceComponent,
    AdvanceComponent,
    LeavesComponent,
    SalaryComponent,
    AddEditEmployeeComponent,
    DetailEmpComponent,
    AddEditAttendanceComponent,
    AddEditSalaryComponent,
    AddEditLeaveComponent,
    AddEditAdvanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // Add the dialog component here to make it available for injection.
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
