import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    console.log(user)
    return  this.http.post('http://localhost:3000/profile-controller/register', user, {
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
DeleteUse(id:any){
  return this.http.delete('http://localhost:3000/profile-controller/'+id).subscribe({
    next:(response)=>{
      console.log('User deleted succcessfully:',response);
      alert('user deleted successfully');
        },
      error:(err)=>{
        console.error('Error removing user',err);
       alert("Failed to delete user")
      }
  })

 

}
UpdateUser(id:any,data:any){
  return this.http.put('http://localhost:300/profile-controller/'+id,data).subscribe({
    next:(response)=>{
      console.log('User updated successfully:',response);
      alert('User updated successfully');
    },
    error:(err)=>{
      console.error('Error updating user',err);
      alert("Failed to update user")
    }
  })
    
}
}