import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj:any = {
    username:'',
    password:''
  }

  constructor(private router:Router){
     
  }

  onLogin(){
    if(this.userObj.username == "Paresh" && this.userObj.password == "123456"){
      this.router.navigateByUrl("dashboard")
    }else{
      alert("UserName or Password is Incorrect!")
    }
  }

}
