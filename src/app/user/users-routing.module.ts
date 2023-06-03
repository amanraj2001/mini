import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'',component:NavbarComponent,
children:[
  {path:'',component:HomepageComponent},
  {path:'used/:cityname',component:CityComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
