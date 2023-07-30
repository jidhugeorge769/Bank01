import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="YOUR PERFECT BANKING PARTNER"
  
  placeholderdata1="enter account number"

  username:any
  password:any

  constructor()  { }

  ngOnInit(): void {

  }

  login(a:any,b:any){

    this.username=a.value

    this.password=b.value

    console.log(this.username,this.password);
    
    alert("login clicked")


  }



}
