import { Component, OnInit } from '@angular/core';
import { MainservService } from 'src/app/mainserv.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userarr!:boolean;

  morearr:Array<string>=[
    "About us" , "Blog"
  ]

    cityarr:Array<any>=[]
    constructor(private demo:MainservService){

    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.demo.getcity().subscribe((p:any)=>{
        console.log(p);
        this.cityarr=p
        this.demo.cit = this.cityarr
        this.userarr=this.demo.avail
        console.log(this.userarr);
      })

    }

    get status(){
      return this.demo.isloggedin();
    }
}
