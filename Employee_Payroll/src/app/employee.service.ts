import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee(){
   return this.http.get('http://localhost:5000')
  }

  AddNewEmployee(data:any){
    return this.http.post('http://localhost:5000/add',data);
  }
  
  DeleteEmp(empId:any){
    return this.http.delete('http://localhost:5000'+'/'+empId);
  }

  getByIDEmp(empId:any){
    return this.http.get('http://localhost:5000'+'/'+empId);
  }

  UpdateEmp(empId:any,form:any){
    return this.http.put('http://localhost:5000'+'/'+empId,form);
  }


  //Attendance
  getAllAttendance(){
    return this.http.get('http://localhost:5001');
  }

  GetAttendanceWithEmployee(){
    return this.http.get('http://localhost:5050'+"/getEmpWithAtd");
  }

  getByIdAttendance(id:any){
    return this.http.get('http://localhost:5001/'+id);
  }

  FillNewAttendance(data:any){
    return this.http.post('http://localhost:5001/addAttendance',data);
  }

  DeleteAttendance(attendanceId:any){
    return this.http.delete('http://localhost:5001'+'/'+attendanceId)
  }

  UpdateAttendance(attendanceId:any,form:any){
    return this.http.put('http://localhost:5001'+'/Edit_Attendance/'+attendanceId,form);
  }


  //Salary
  getAllSalary(){
    return this.http.get('http://localhost:5002');
  }

  getAllSalaryWithEmp(){
    return this.http.get('http://localhost:5050'+'/getAllSalaryWithEmloyeeDetails');
  }

  getByIdSalary(id:any){
    return this.http.get('http://localhost:5002/'+id);
  }

  AddnewSalary(data:any){
    return this.http.post('http://localhost:5002'+'/addSalary/',data);
  }

  DeleteSalary(salaryId:any){
    return this.http.delete('http://localhost:5002'+'/'+salaryId);
  }

  UpdateSalary(salaryId:any,form:any){
    return this.http.put('http://localhost:5002'+'/Edit_Salary/'+salaryId,form);
  }


  //Leaves
  getAllLeave(){
    return this.http.get('http://localhost:5003'+"/getAllLeaveWithEmloyeeDetails");
  }

  insertLeave(leave:any){
    return this.http.post('http://localhost:5003'+"/AddLeave",leave);
  }

  updateByIdLeave(LeaveId:any,leave:any){
    return this.http.put('http://localhost:5003'+"/UpdateLeave/"+LeaveId,leave);
  }

  deleteLeave(LeaveId:any){
    return this.http.delete('http://localhost:5003'+"/DeleteLeave/"+LeaveId);
  }

  getByIdLeave(LeaveId:any){
    return this.http.get('http://localhost:5003'+"/Leave/"+LeaveId);
  }


  //Advance
  getAllAdvance(){
    return this.http.get('http://localhost:5050'+"/getAllAdvanceWithEmloyeeDetails");
  }

  insertAdvance(adv:any){
    return this.http.post('http://localhost:5004'+"/AddAdvance",adv);
  }

  updateByIdAdvance(AdvanceId:any,adv:any){
    return this.http.put('http://localhost:5004'+"/UpdateAdvance/"+AdvanceId,adv);
  }

  deleteAdvance(AdvanceId:any){
    return this.http.delete('http://localhost:5004'+"/DeleteAdvance/"+AdvanceId);
  }

  getByIdAdvance(AdvanceId:any){
    return this.http.get('http://localhost:5004'+"/Advance/"+AdvanceId);
  }
}
