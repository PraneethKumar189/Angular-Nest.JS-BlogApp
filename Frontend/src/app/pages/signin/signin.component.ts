import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import {FormsModule, NgModel} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'
import { Router,RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FloatLabelModule,FormsModule,InputTextModule,CalendarModule,ButtonModule,RouterOutlet],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
 constructor(private apiservice:ApiserviceService,private router:Router){}

showIcon:boolean=true;
date:Date | undefined;
center:string='center';
name:string=''
usn:string=''
dob:Date|null=null;
Reg_num:null | undefined;

submitForm(contactform:any){
 this.usn=contactform.rno
  //this.router.navigate(['/home'])
  this.apiservice.getUserByID(this.usn).subscribe(data=>{
    console.log(data.Reg_No)

  })
}


}
