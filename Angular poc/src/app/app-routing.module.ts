import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'show', component:ShowUsersComponent},
  {path:'add', component:AddUserComponent},
  {path:'search', component:SearchComponent},
  {path:'update/:id', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
