import { Pipe, PipeTransform } from '@angular/core';
import {SharedDataService} from "./shared-data.service";
import * as moment from 'moment';
@Pipe({
  name: 'callAge'
})
export class CallAgePipe implements PipeTransform {
constructor(public service:SharedDataService) {

}
  /*transform(value: Date ): any {

    if (!value) return value;

    return moment().diff(value, 'years')+" Years";

  }*

   */
  transform(dob?: Date): number {

    if (dob != undefined) {
console.log(dob);
      var yearOfBirth = new Date(dob).getFullYear();
      var currentYear = new Date().getFullYear();
      let age = Math.abs(currentYear - yearOfBirth);
      return age;
      console.log(age);
    }
    return 0;
  }

}

  /*transform(value: any): number {
   let val = new Date(value).getFullYear();
    let today= new Date().getFullYear();
    let age = (today-val);
    return age;

  }*/



