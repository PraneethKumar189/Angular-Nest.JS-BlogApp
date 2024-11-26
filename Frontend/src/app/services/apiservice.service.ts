import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  getblog(){
    return this.http.get('http://localhost:3000/blogs')
  }
  getblogbyid(id:any){
    return this.http.get('http://localhost:3000/blogs/'+id)
  }
  private userurl='http://localhost:3000/Users'
  private magzurl='http://localhost:3000/magazines'
  getMagzines(){
    return this.http.get(this.magzurl)
  }
  getMagbyId(val:any){
    return this.http.get(this.magzurl+'?id='+val)
  }
  getUserByID(Rno:string){
    return this.http.get(this.userurl+'?Reg_No='+Rno)
  }
}
