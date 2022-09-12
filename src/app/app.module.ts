import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { PeopleComponent } from './components/home/people/people.component';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { LoginRoutingModule } from './components/login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PeopleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
