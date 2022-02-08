import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl:string;

  constructor(private http:HttpClient) {

    this.userUrl = 'http://localhost:8080/users';
   }

   public findById(id:number){
     return this.http.get<User>(this.userUrl+`/${id}`)
   }

   public findAll(): Observable<User[]>{
     return this.http.get<User[]>(this.userUrl)
   }

   public findUserByFirstname(firstname:string): Observable<User[]> {
     return this.http.get<User[]>(this.userUrl+`/fname/${firstname}`);
   }

   public findUserByLastname(lastname:string): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl+`/lname/${lastname}`);
  }

  public findUserByPincode(pincode:number): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl+`/pincode/${pincode}`);
  }

  public findAllSortedByDobAndDoj(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl+`/sortByDobAndDoj`); 
  }


  public save(user:User){
    return this.http.post<User>(this.userUrl, user);
  }

  public updateUser(newUser:User) {
    return this.http.put<User>(this.userUrl, newUser);
  }

  public softDeleteUser(id:number) {
    return this.http.put<User>(this.userUrl+`/soft/${id}`, id);
  }

  public unSoftDeleteUser(id:number) {
    return this.http.put<User>(this.userUrl+`/unsoft/${id}`, id);
  }


  public delete(id:number){
    return this.http.delete<User>(this.userUrl+`/${id}`);
  }

}
