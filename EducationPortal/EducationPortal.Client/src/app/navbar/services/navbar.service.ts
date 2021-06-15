import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequesEduDTO } from 'src/app/all-list-education/models/requestModelDTO';
import { EducationDTO } from 'src/app/creatEducation/models/educationModel';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  loggedAuth:boolean=false;
  baseUrl:string="https://localhost:5001/api/user/";
  userinfo:any;


  constructor(private http:HttpClient) { }


  login(model:any){
    return this.http.post(this.baseUrl+'login',model).pipe(
      map((response:any) => {
        console.log(response);
        const result=response;

        if(result){
          console.log(result);
          this.userinfo=result;
          console.log(this.userinfo);
          this.loggedAuth=true;
        }
      })
    )
  }


   loggedIn(logged:boolean){

    this.loggedAuth=logged;
    return this.loggedAuth;
  }

  getUserInfo(){
    return this.userinfo;
  }

  loggedInAuth(){

    return this.loggedAuth;
  }

  createEdu(model:any){

    console.log(model);

    return this.http.post(this.baseUrl+'create',model).subscribe(
      data=>{
        console.log(data);
      }
    )
    ;

  }

  createEduRequest(model:RequesEduDTO){

    console.log(model);

    return this.http.post(this.baseUrl+'createrequest',model).subscribe(
      data=>{
        console.log(data);
      }
    )
    ;

  }
  getEducation():Promise<any[]>{
    this.userinfo=this.getUserInfo();

    return this.http.get<any[]>(this.baseUrl+'geteducations?username='+this.userinfo.userName).toPromise();


  }


  getRequestList():Promise<any[]>{
    this.userinfo=this.getUserInfo();

    return this.http.get<any[]>(this.baseUrl+'getrequestedu?username='+this.userinfo.userName).toPromise();


  }
  getAllEducation():Promise<any[]>{

    return this.http.get<any[]>(this.baseUrl+'getalleducations').toPromise();


  }
  getActiveEducation():Promise<any[]>{

    return this.http.get<any[]>(this.baseUrl+'getactiveeducations').toPromise();


  }

  deleteEducation(id:number){

    return this.http.get<any[]>(this.baseUrl+'EducationDelete?Id='+id).toPromise();
  }

  deleteActiveEducation(id:number){

    return this.http.get<any[]>(this.baseUrl+'ActiveeduDelete?Id='+id).toPromise();
  }
  acceptRequestEdu(id:number){

    return this.http.get<any[]>(this.baseUrl+'AcceptRequest?Id='+id).toPromise();
  }
}
