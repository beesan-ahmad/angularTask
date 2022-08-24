import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'form',component:UserComponent},
  {path: 'List',component:TableComponent},
  {path: ':id', component: UserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
