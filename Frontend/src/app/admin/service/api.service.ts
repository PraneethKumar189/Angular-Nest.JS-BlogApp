import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    console.log(user)
    return  this.http
    .post('http://localhost:3000/profile-controller/register', user, {
      headers: { 'Content-Type': 'application/json' },
    })
    .subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
        alert('User added successfully!');
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert('Failed to add user. Please try again.');
      },
    });
}
}