import { Component, OnInit } from '@angular/core';
import { LoginPageService } from '../services/login-page.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: any= {};
  constructor(private loginService: LoginPageService) { }

  ngOnInit(): void {
  }


  register(){

    console.log(this.model);
    this.loginService.register(this.model).subscribe(()=> {
      console.log("kayıt başarılı.")
    }, error=>{
      console.log("kayıt başarısız");
    })

  }
}
