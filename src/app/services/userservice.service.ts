import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../models/User.model';
import { contact } from '../models/contact.model';
import { authresponse } from '../models/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpclt:HttpClient, private Route:Router) { 
  }
 
  getAllUsers():Observable<user[]>
  {
    return this.httpclt.get<user[]>("http://localhost:3000/users")
  }
  deleteUser(id:number):Observable<Object>
  {
    return this.httpclt.delete(`http://localhost:3000/users/${id}`)
  }
  updateUser(id:number,user:user):Observable<user>
  {
    return this.httpclt.put<user>(`http://localhost:3000/users/${id}`,user)
  }
  getUserById(id:number):Observable<user>
  {
    return this.httpclt.get<user>(`http://localhost:3000/users/${id}`)
  }
  signup(user:user):Observable<authresponse>{
    return this.httpclt.post<authresponse>("http://localhost:3000/users",user)
  }
  connect(username:String,password:String):Observable<authresponse>{
    return this.httpclt.post<authresponse>("http://localhost:3000/login/",{username:username,password:password})
  }
  sendMessage(cont:contact):Observable<Object>{
    return this.httpclt.post<Object>("http://localhost:3000/messages",cont)
  }
  getAllMessages():Observable<contact[]>
  {
    return this.httpclt.get<contact[]>("http://localhost:3000/messages")
  }
  deleteMessage(id:number):Observable<Object>
  {
    return this.httpclt.delete(`http://localhost:3000/messages/${id}`)
  }
}
