import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    console.log(user)
    return this.http.post('http://localhost:3000/profile-controller/register',user,{
      headers: { 'Content-Type': 'application/json' }})
}
}