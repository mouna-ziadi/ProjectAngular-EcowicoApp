import { Component, OnInit } from '@angular/core';
import { error } from 'highcharts';
import { login } from '../models/Login';
import { LoginuserService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: login = new login();
  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.login)
    this.loginuserservice.loginUser(this.login).subscribe(data=>{
      alert("login successfully")
    },error=>alert("sorry please enter correct username and password"));
  }

}
