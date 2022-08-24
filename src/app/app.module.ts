import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { TableComponent } from './users/table/table.component';
import {AppComponent} from "./app.component";
import { CallAgePipe } from './call-age.pipe';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CallAgePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
