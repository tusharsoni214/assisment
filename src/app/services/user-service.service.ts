import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'https://reqres.in/api/users';
  
  constructor(private httpClient : HttpClient) { }
  getUserData()
  {
    return this.httpClient.get(this.url);
  }
}
