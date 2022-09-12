import { LoginRoutingModule } from './login-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AdminloginComponent, UserloginComponent],
  imports: [

]
})
export class LoginModule { }
