import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { PeopleComponent } from './components/home/people/people.component';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { RouterModule } from '@angular/router';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';
import { UserloginComponent } from './components/login/userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PeopleComponent,
    AdminloginComponent,
    UserloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    LoginRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
