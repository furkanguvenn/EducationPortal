import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'active-education',
  templateUrl: './active-education.component.html',
  styleUrls: ['./active-education.component.css']
})
export class ActiveEducationComponent implements OnInit {

  educationsactivelist:any[]=[];

  constructor(private navbarService:NavbarService) { }

  ngOnInit(): void {

    this.getActiveEdu();
  }

  async getActiveEdu(){

    await  this.navbarService.getActiveEducation().then(z=>{

      this.educationsactivelist=z;
      console.log(this.educationsactivelist);
    })

  }

  async deleteEducation(id:number){

    await this.navbarService.deleteActiveEducation(id).then(x=>{
    });

  }
}
