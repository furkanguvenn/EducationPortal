import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/services/navbar.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usertype:number=0
  username:string="";
  userinfo:any;
  constructor(private navbarService:NavbarService) { }

  ngOnInit(): void {

     this.userinfo= this.navbarService.getUserInfo();

     this.username=this.userinfo.fullName;
     this.usertype=this.userinfo.userType;
     console.log(this.username);
  }


}
