import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users:User[] = [];

  findChoice:string = '';
  choiceValue:string = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  async searchAndChangeList(){
    if(!this.findChoice || !this.choiceValue){
      this.users = [];
    }
    else if(this.findChoice.includes('id') && this.choiceValue){
      await this.getUserById();
    }
    else if(this.findChoice.includes('fname') && this.choiceValue){
      await this.getUsersByFirstname();
    }
    else if(this.findChoice.includes('lname') && this.choiceValue){
      await this.getUsersByLastname();
    }
    else if(this.findChoice.includes('pincode') && this.choiceValue){
      await this.getUsersByPincode();
    }
  }

  async getUserById(){
    await this.userService.findById(parseInt(this.choiceValue)).subscribe(result => {
      this.users = [result];
    });
  }

  async getUsersByFirstname(){
    await this.userService.findUserByFirstname(this.choiceValue).subscribe(result => {
      this.users = result;
    })
  }

  async getUsersByLastname(){
    await this.userService.findUserByLastname(this.choiceValue).subscribe(result => {
      this.users = result;
    })
  }

  async getUsersByPincode(){
    await this.userService.findUserByPincode(parseInt(this.choiceValue)).subscribe(result => {
      this.users = result;
    })
  }



}
