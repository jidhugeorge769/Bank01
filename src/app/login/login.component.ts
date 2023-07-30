import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="YOUR PERFECT BANKING PARTNER"
  
  placeholderdata1="enter account number"

  constructor()  { }

  ngOnInit(): void {

  }

  login(){

    alert("login clicked")
  }

  unameChange(event:any){

    console.log(event.target.value);
    
  }
  


}
