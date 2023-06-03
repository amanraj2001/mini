import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MainservService } from 'src/app/mainserv.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {



  constructor(private demo:MainservService,private route:ActivatedRoute, private router:Router){

  }
city:Array<any>=[]
  par:Array<any>=[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.route.params.subscribe(p=>{
      console.log(p['cityname']);
console.log(this.demo.cit);

      this.par=this.demo.cit.filter(x=>x.cityname==p['cityname'])
      console.log(this.par);


    })


  }
}
