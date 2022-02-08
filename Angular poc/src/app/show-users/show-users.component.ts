import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users:User[] = [];

  sortByDob:boolean = false;

  constructor(private router:Router ,private userService:UserService) {
    
   }

  async ngOnInit() {
    await this.getAllUsers();
  }

  async getUsersSortedByDOJ(){
    await this.userService.findAllSortedByDobAndDoj().subscribe(result => {
      this.users = result;
      console.log(`Sorted By DOB : ${this.users}`);
    })
  }

  async changeList(){
    if(this.sortByDob){
      await this.getUsersSortedByDOJ();
    }else{
      await this.getAllUsers();
    }
    this.sortByDob = !this.sortByDob;
  }

  reverseList(){
    this.users = this.users.reverse();
  }

  async getAllUsers(){
    await this.userService.findAll().subscribe(result => {
      this.users = result;
      console.log(`All users : ${this.users}`);
    });
  }

}
