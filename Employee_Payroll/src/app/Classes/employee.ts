import { Time } from "@angular/common";

export interface IAttendance{
    empId: Number,
    empName : String,
    empContactNo : Number,
    attendanceDate: Date,
    attendanceId: Number,
    inTime: Date,
    outTime: Date,
    isFullDay: Boolean
}

export class attendance{
    empName : String;
    empContactNo : Number;
    attendanceId : Number;
    empId: Number;
    attendanceDate?: Date;
    inTime? : Date;
    outTime?: Date;
    isFullDay: Boolean;
    constructor(){
        this.empName = '';
        this.empContactNo = 0;
        this.attendanceId = 0;
        this.empId = 0;
        this.attendanceDate = undefined;
        this.inTime = undefined;
        this.outTime = undefined;
        this.isFullDay = false;
    }
}