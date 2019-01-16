import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  LoginUser(e){
  	e.preventDefault();
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == "admin" && password == "password"){
  		this.user.setUserLoggedIn(username);
 		this.router.navigate(['/dashboard']);
  	}else{
  		alert('Sorrry wrong username or password, try again :-)');
  	}
  }

}
