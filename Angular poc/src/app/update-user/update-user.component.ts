import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:User = new User();

  id:number = 0

  constructor(private router:Router, private activeRoute:ActivatedRoute, private userService:UserService) {
    let temp = activeRoute.snapshot.paramMap.get('id');
    this.id = temp ? parseInt(temp) : 0;
   }

  async ngOnInit(){
    if(this.id > 0){
      await this.userService.findById(this.id).subscribe(result => {
        this.user = result;
      });
    }
  }

  async onSubmit(){
    await this.userService.updateUser(this.user).subscribe(result => {
      this.gotoShowMenu();
    });
  }

  gotoShowMenu(){
    this.router.navigate(['/show']);
  }
}
