import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  logged:boolean=false;
  model: any={};

  constructor(public navbarService: NavbarService, private router:Router) { }

  ngOnInit(): void {
  }


  login()
  {
    console.log(this.model);
    this.navbarService.login(this.model).subscribe(next =>{
      console.log("login başarılı");
      this.logged=true;
      this.router.navigate(['/dashboard']);


      //this.router.navigate(['/member']);
    }, error => {
      console.log(error);
    })
  };



  logOut(){


    console.log("başarıyla çıkış yapıldı.");
    this.router.navigate(['/home']);

  }

}
