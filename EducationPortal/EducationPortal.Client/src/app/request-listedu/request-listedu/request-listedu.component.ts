import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'request-listedu',
  templateUrl: './request-listedu.component.html',
  styleUrls: ['./request-listedu.component.css']
})
export class RequestListeduComponent implements OnInit {

  educationslist:any[]=[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {

    this.getRequestListe();
  }

  async getRequestListe(){

    await  this.navbarService.getRequestList().then(z=>{

      this.educationslist=z;
      console.log(this.educationslist);
    })  }


    async AcceptRequest(list:number){
      await this.navbarService.acceptRequestEdu(list).then(x=>{
      });
    }
}
