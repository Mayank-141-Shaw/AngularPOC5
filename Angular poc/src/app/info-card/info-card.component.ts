import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input() user:User = new User();

  dob:string =''
  doj:string =''

  constructor(private userService:UserService, private router:Router) {   }

  ngOnInit(): void {
    console.log(this.user.dob)
    console.log(this.user.doj)
    
    this.dob = new Date(this.user.dob).toDateString();
    this.doj = new Date(this.user.doj).toDateString();
  }

  async softDelete(){
    this.user.deleted = true;
    await this.userService.softDeleteUser(this.user.id).subscribe(result => {
      console.log('Soft deleted');
    });
  }

  async unSoftDelete(){
    this.user.deleted = false;
    await this.userService.unSoftDeleteUser(this.user.id).subscribe(result => {
      console.log('Unsoft deleted')
    });
  }

  async delete(){
    await this.userService.delete(this.user.id).subscribe(result => {
      console.log('Deleted');
      window.location.reload();
    });
  }

  update(){
    this.router.navigate([`/update/${this.user.id}`])
  }
}
