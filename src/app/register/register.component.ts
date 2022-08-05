import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm :any =FormGroup;

  constructor(private formBuilder : FormBuilder, private router :Router, private toastr :ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
    });
  }
  registerBtn()
  {
    localStorage.removeItem("userData");
    localStorage.setItem('userData',JSON.stringify(this.registerForm.value));
    this.router.navigate(['/login']);
    this.toastr.success('Register SuccessFully')
  }
}
