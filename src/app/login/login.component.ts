import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :any =FormGroup;
  userDataArray : any =[];
  constructor(private formBuilder : FormBuilder, private router :Router,private toastr :ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required,]],
      password: ['', [Validators.required,]]
    });
  }
  loginBtn(){
    this.userDataArray = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log(this.userDataArray);

    if(this.loginForm.get('userName').value  === this.userDataArray.userName && this.loginForm.get('password').value === this.userDataArray.password )
    {
      let get =this.loginForm.get('userName').value;
      this.router.navigate(['/welcome'], {queryParams:{data:get}});
      console.log("Welcome Page");
      this.toastr.success('User Login SuccessFully');
    }else if(this.loginForm.get('userName').value === 'admin' && this.loginForm.get('password').value === '1234')
    {
      this.router.navigate(['/userDataBase']);
      console.log("User Data Base");
      this.toastr.success('Admin Login SuccessFully')
    }
    else{
      console.log('warning ');
      this.toastr.error('Invalid User and Password')
    }
  }

}
