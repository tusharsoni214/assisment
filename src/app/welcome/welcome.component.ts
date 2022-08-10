import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }
  name:any;
  showFirstName :any;
  showLastName :any;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:any) =>{
      console.log("welcome Page Response "+params.data);
      this.name =params.data;
      let userData = JSON.parse(localStorage.getItem('userData') || '{}');
      let uName = userData.userName;

      if(uName === this.name)
      {

        this.showFirstName = userData.firstName;
        this.showLastName = userData.lastName;
        console.log(this.showFirstName);
        this.showLastName = userData.lastName;
      }
    })
  }
  LogoutBtn()
  {
    // localStorage.removeItem("userData");
    this.router.navigate(['/login'])
  }
}
