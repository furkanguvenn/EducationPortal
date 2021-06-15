import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/component/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/component/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { HomeComponent } from './home/component/home.component';
import { AuthGuard } from './Guard/authGuard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEducationComponent } from './creatEducation/component/create-education.component';
import { ListEducationComponent } from './listEducation/component/list-education.component';
import { AllListEducationComponent } from './all-list-education/component/all-list-education.component';
import { ActiveEducationComponent } from './activeEducation/active-education/active-education.component';
import { RequestListeduComponent } from './request-listedu/request-listedu/request-listedu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    CreateEducationComponent,
    ListEducationComponent,
    AllListEducationComponent,
    ActiveEducationComponent,
    RequestListeduComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
