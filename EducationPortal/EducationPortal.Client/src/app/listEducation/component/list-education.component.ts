import { Component, OnInit } from '@angular/core';
import { EducationDTO } from 'src/app/creatEducation/models/educationModel';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Router, RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.css']
})
export class ListEducationComponent implements OnInit {

  constructor(private navbarService: NavbarService,private route: Router) { }
  edudto:EducationDTO[]=[];
  educations:any[]=[];
  async ngOnInit() {

    this.getEducationsList().then(x=>{
      console.log(this.edudto);
    });

  }

  async getEducationsList(){

   await  this.navbarService.getEducation().then(x=>{
      const temp=x;
      this.edudto=temp;
      console.log(temp);
    });
    console.log(this.edudto);
  }

  async deleteEducation(list:number){
    await this.navbarService.deleteEducation(list).then(x=>{
    });

  }

}
