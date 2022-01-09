import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "http://127.0.0.1:5000/get_status";
    return this.http.get(url);

  }
  toggleData(){
    let url = "http://127.0.0.1:5000/toggle";
    return this.http.get(url);
  }
}
