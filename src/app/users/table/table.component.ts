import { Component, OnInit } from '@angular/core';
import {SharedDataService, User} from "../../shared-data.service";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

    public NewUser:User={name:'',age:0,email:'',password:'',dateOfBirthday:new Date()};
   UserToUpdate :User={name:'',age:0,email:'',password:'',dateOfBirthday:new Date()};
  user:{name:String, email:String, age:Number, password:String,dateOfBirthday:Date}[]=[];
    constructor(public service:SharedDataService,public router:Router) {
    }


    deleteUser(user:User){
    let x =this.service.UserList.indexOf(user);
    if(x>=0){
      this.service.UserList.splice(x ,1);
    }
     // this.router.navigate(['/users/List']);
    }
    updateUser(user:User){
      this.UserToUpdate={...user};
    }
    }
