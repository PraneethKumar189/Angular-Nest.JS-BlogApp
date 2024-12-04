import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  

  constructor(private http:HttpClient) { }
  getblog(){
    return this.http.get('http://localhost:3000/blog-controller')
  }
  getblogbyid(id:any){
    return this.http.get('http://localhost:3000/blog-controller/'+id)
  }
  private userurl='http://localhost:3000/profile-controller'
  private magzurl='http://localhost:3000/magazines'
  getMagzines(){
    return this.http.get(this.magzurl)
  }
  getMagbyId(val:any){
    return this.http.get(this.magzurl+'?id='+val)
  }
  getUserByID(Rno:string){
    return this.http.get<any>(this.userurl+'?Reg_No='+Rno)
  }
  postblog(content:any){
    const id=sessionStorage.getItem('uid');
    return this.http.post('http://localhost:3000/blog-controller/1',content,{
      headers: { 'Content-Type': 'application/json' }})
  }
}
