import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserComponent} from "./user/user.component";
import {TableComponent} from "./table/table.component";
import {FormsModule} from "@angular/forms";
import {CallAgePipe} from "../call-age.pipe";


@NgModule({
  declarations: [
    UserComponent,
    TableComponent,
    CallAgePipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers:[CallAgePipe]
})
export class UsersModule { }
