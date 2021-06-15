import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NavbarService } from "../navbar/services/navbar.service";

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {

    constructor(private navbarService:NavbarService,private rooter:Router) {}

    canActivate(){

      if(this.navbarService.loggedInAuth()){
        console.log("TRUEEEEE");
        return true;
      }

        console.log("AUTH GUARD");
        return false;




  }
}

