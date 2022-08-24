import { Component,EventEmitter,Input,OnInit,Output } from "@angular/core";
import { NgForm } from '@angular/forms';
import {SharedDataService, User} from "../../shared-data.service";
import {CallAgePipe} from "../../call-age.pipe";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public NewUser:User={name:'',dateOfBirthday: new Date(),age:0,email:'',password:'',}
  /*public name: any ={};
  public year: any ={};
  public AgeType: any ={};
  public age: any ={};
  public email: any ={};
  public password: any ={};*/


  constructor(public service:SharedDataService,private router: Router) { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();

    }
    else {
      // this.NewUser.age =this.datePipe.transform(this.NewUser.dateOfBirthday);
      this.service.UserList.push(this.NewUser);
      this.router.navigate(['/users/List']);
     // http://localhost:4200/users/List

    }

  }

  /* onSubmit():void {
this.age.name = new CallAgePipe().transform(this.year.name);
  }*/
}


