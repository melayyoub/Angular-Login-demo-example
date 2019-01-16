import { Component, OnInit } from '@angular/core';
import { UserService } from '.././service/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name = 'guest';

  constructor(private user: UserService) { }

  ngOnInit() {
  	this.name = this.user.username;
  }

}
