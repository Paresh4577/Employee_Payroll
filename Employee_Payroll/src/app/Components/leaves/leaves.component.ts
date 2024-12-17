import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.css'
})
export class LeavesComponent {
  LeaveData:any = [];

  constructor(private apiSer:EmployeeService){}

  ngOnInit(): void {
    this.loadLeave();
  }

  loadLeave(){
    this.apiSer.getAllLeave().subscribe((res)=>{
      this.LeaveData = res;
    });
  }

  deleteMe(LeaveId :any){
    this.apiSer.deleteLeave(LeaveId).subscribe(()=>{
      this.ngOnInit();
    });
  }
}
