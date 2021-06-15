import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {


  baseUrl:string="https://localhost:5001/api/user/";

  constructor(private http:HttpClient) { }

  register(model:any){

    return this.http.post(this.baseUrl+'register',model);


  }
  createEdu(model:any){
    debugger;
    console.log(model);

    return this.http.post(this.baseUrl+'create',model).subscribe(
      data=>{
        console.log(data);
      }
    )
    ;

  }

}

