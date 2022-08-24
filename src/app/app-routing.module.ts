import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './users/table/table.component';
import { UserComponent } from './users/user/user.component';





const routes: Routes = [
  { path:'users', loadChildren:()=>import('./users/users.module').then(c=>c.UsersModule)}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UserComponent,TableComponent]
