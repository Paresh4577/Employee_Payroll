import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrl: './advance.component.css'
})
export class AdvanceComponent {
  advanceData :any =[];

  constructor(private apiSer : EmployeeService){}

  ngOnInit(): void {
    this.loadAdvance();
  }

  loadAdvance(){
    this.apiSer.getAllAdvance().subscribe((res:any)=>{
      this.advanceData = res;
    });
  }

  deleteMe(AdvanceId:any){
    this.apiSer.deleteAdvance(AdvanceId).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }
}
