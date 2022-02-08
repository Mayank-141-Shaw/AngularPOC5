import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User;

  constructor(private router:Router, private userService:UserService) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result => this.gotoHomePage());
  }

  gotoHomePage(){
    this.router.navigate(['/show']);
  }

}
