import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-advance',
  templateUrl: './add-edit-advance.component.html',
  styleUrl: './add-edit-advance.component.css'
})
export class AddEditAdvanceComponent {
  AdvanceObj:any ={};
  EmployeeObj :any=[];

  AdvanceId = 0;
  constructor(private apiSer : EmployeeService,private router:Router,private actRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.AdvanceId = Number(this.actRoute.snapshot.paramMap.get('AdvanceId'));

    this.loadEmployee();

    if(this.AdvanceId !=0){
      this.loadAdvance();
    }
  }

  loadEmployee(){
    this.apiSer.getAllEmployee().subscribe((res:any)=>{
      this.EmployeeObj = res;
    });
  }

  loadAdvance(){
    this.apiSer.getByIdAdvance(this.AdvanceId).subscribe((res:any)=>{
      this.AdvanceObj = res;
    });
  }

  saveMe(){
    if(this.AdvanceId != 0){
      this.apiSer.updateByIdAdvance(this.AdvanceId,this.AdvanceObj).subscribe((res:any)=>{
        this.router.navigate(['advance']);
      });
    }else{
      this.apiSer.insertAdvance(this.AdvanceObj).subscribe((res:any)=>{
        this.router.navigate(['advance']);
      });
    }
  }
}
