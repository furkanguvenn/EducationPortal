import { Routes } from "@angular/router";
import { ActiveEducationComponent } from "./activeEducation/active-education/active-education.component";
import { AllListEducationComponent } from "./all-list-education/component/all-list-education.component";
import { CreateEducationComponent } from "./creatEducation/component/create-education.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./Guard/authGuard";
import { HomeComponent } from "./home/component/home.component";
import { ListEducationComponent } from "./listEducation/component/list-education.component";
import { RequestListeduComponent } from "./request-listedu/request-listedu/request-listedu.component";


export const appRoutes: Routes = [
 { path:'',component:HomeComponent},
 { path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
 { path:'create-education',component:CreateEducationComponent,canActivate: [AuthGuard]},
 { path:'list-education',component:ListEducationComponent,canActivate: [AuthGuard]},
 { path:'all-list-education',component:AllListEducationComponent,canActivate: [AuthGuard]},
 { path:'request-listedu',component:RequestListeduComponent,canActivate: [AuthGuard]},
 { path:'active-education',component:ActiveEducationComponent,canActivate: [AuthGuard]}






];
