import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export  class SharedDataService {
  public UserList:User[] =[


  ];
  constructor() { }
}
export interface User {

  name: string;
  //year: string;
  age: number;
  email:string;
  password:string;
  dateOfBirthday:Date;
}

