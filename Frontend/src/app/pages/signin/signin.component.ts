import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormsModule, NgModel} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'
import { Router,RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { User } from '../../Models/Users';
import {find} from 'rxjs'
import { consumerBeforeComputation } from '@angular/core/primitives/signals';
 @Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FloatLabelModule,FormsModule,InputTextModule,CalendarModule,ButtonModule,RouterOutlet],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
 constructor(private apiservice:ApiserviceService,private router:Router){}
// user:User | undefined
showIcon:boolean=true;
date:Date | undefined;
center:string='center';
name:string=''
usn:string=''
dob:Date|null=null;
Reg_No:null | undefined;

submitForm(contactform:any){
 this.usn=contactform.rno
 console.log(contactform)
  
  this.apiservice.getUserByID(this.usn).subscribe(res=>{
    console.log(res)
  if(res[0].regno === contactform.rno && res[0].name === contactform.username){
    this.router.navigate(['/home'])
    console.log("password is correct")
    sessionStorage.setItem('uid',this.usn)
    sessionStorage.setItem('loggedin','1');
  }
  else{
    this.router.navigate([''])
    console.log("password is incorrect") 
    
  }
    
  })
}


}
