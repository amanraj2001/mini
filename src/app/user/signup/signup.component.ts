import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainservService } from 'src/app/mainserv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form!:FormGroup;

  constructor(private demo:MainservService,private fb:FormBuilder) {
    this.form= this.fb.group( {
      username:['',Validators.required],
      useremail:['',Validators.required],
      userpass:['',Validators.required]
    })
  }

 regis(formdata:any){
  this.demo.register(formdata).subscribe(x=>{
    console.log("user added");
  


  })

 }

}
