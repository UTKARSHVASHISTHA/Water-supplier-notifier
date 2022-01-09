import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  water_status: any;
  red_status: any;
  green_status: any;
  water_status_string: any;
  constructor(public user: UserServiceService){
    this.user.getData().subscribe(
      res => {
        console.log(res);
        this.water_status = JSON.stringify(res);
        this.water_status = JSON.parse(this.water_status)
        this.water_status = this.water_status['message']
        if(this.water_status == 'failure'){
          this.red_status = true;
          this.green_status = false;
          this.water_status_string = "On Hold."
        }
        if(this.water_status == 'success'){
          this.green_status = true;
          this.red_status = false;
          this.water_status_string = "Running."
        }
      }
    )
  }
  change_status(){
    console.log("Welcome")
    this.user.toggleData().subscribe(
      res => {
        console.log(res);
        if(this.red_status == false){
          this.red_status = true
          this.green_status = false
          this.water_status_string = "On Hold."
        }
        else{
          this.red_status = false
          this.green_status = true
          this.water_status_string = "Running."
        }
    })}
  title = 'Water-Supply-Notifier';
}

  