import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainservService {

  avail!:boolean
  constructor(private http:HttpClient) {



   }

   logdata(data:any){
    this.avail=data


   }
   isloggedin() :boolean{
    return this.avail
   }

cit:Array<any>=[]
  getcity():Observable<any>{
    return this.http.get('https://localhost:7011/api/Cities/car')
  }

  register(register:any):Observable<any>{
    return this.http.post("https://localhost:7011/api/User1/register",register)
  }

  login(log:any):Observable<any>
{
return this.http.post("https://localhost:7011/api/User1/verify",log)
}

}
