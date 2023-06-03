import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MainservService } from 'src/app/mainserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginform!:FormGroup;
available:boolean=false
  constructor(private demo:MainservService, private fb:FormBuilder,private router:Router) {
      this.loginform=this.fb.group({
        Username:[''],
        Password:['']
      })

  }
userarr:any;


logged(logindata:any){

  this.demo.login(logindata).subscribe(x=>{
    if(x==null){

      alert("successfully logged in");
      this.userarr=x
      console.log(x);
      this.available=true;
      this.router.navigate([''])
    }
    else{
      alert("errro")
      this.available=false
    }



    this.demo.logdata(this.available)


  })

}


}
