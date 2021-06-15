import { Component, OnInit, Output, } from '@angular/core';
import { LoginPageService } from 'src/app/login/services/login-page.service';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { EducationDTO } from '../models/educationModel';

@Component({
  selector: 'create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {


  eduDTO:EducationDTO[]=[];
  educator:string="";
  model: any={};
  usertype:number=0
  userinfo:any;
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {


  }

createEducation(){
  let temp=this.navbarService.getUserInfo();
  this.eduDTO.push(this.model);
  this.eduDTO[0].Educator=temp.userName;
  console.log(this.eduDTO);
  this.navbarService.createEdu(this.eduDTO[0]);
}
}
