import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-data-base',
  templateUrl: './user-data-base.component.html',
  styleUrls: ['./user-data-base.component.scss']
})
export class UserDataBaseComponent implements OnInit {
  userDtTable:any;
  userData:any;
  constructor(private userService :UserServiceService , private router:Router) { }
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.userService.getUserData().subscribe(res => {
      this.userDtTable =res;
      this.userData = this.userDtTable;
      console.log(this.userDtTable)
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  LogoutBtn()
  {
    // localStorage.removeItem("userData");
    this.router.navigate(['/login'])
  }
}
