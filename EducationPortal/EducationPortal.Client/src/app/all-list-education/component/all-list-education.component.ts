import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { RequesEduDTO } from '../models/requestModelDTO';

@Component({
  selector: 'all-list-education',
  templateUrl: './all-list-education.component.html',
  styleUrls: ['./all-list-education.component.css']
})
export class AllListEducationComponent implements OnInit {

  userinfo:any;

  educationslist:any[]=[];
  requestedu:RequesEduDTO[]=[];
  constructor(private navbarService:NavbarService) { }

  ngOnInit(): void {
    this.getEduList();
  }

 async getEduList(){

  await  this.navbarService.getAllEducation().then(z=>{

    this.educationslist=z;
    console.log(this.educationslist);
  })
  }

  requestEducation(model:any){
     this.userinfo= this.navbarService.getUserInfo();
     this.requestedu.push(model);
     this.requestedu[0].Status=false;
     this.requestedu[0].StudentId=this.userinfo.id;
     this.requestedu[0].StudentName=this.userinfo.userName;

     this.navbarService.createEduRequest(this.requestedu[0]);
     console.log(this.requestedu);

  }
}
