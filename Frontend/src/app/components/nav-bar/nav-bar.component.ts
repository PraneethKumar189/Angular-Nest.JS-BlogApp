import { Component, OnInit } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule,ButtonModule,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  constructor(private api:ApiserviceService,private router:Router){}
sidebarVisible2:boolean=false;
userId:any;
name:string='';
reg_num:string='';
ngOnInit(): void {
  this.userId =sessionStorage.getItem('uid')
  this.api.getUserByID(this.userId).subscribe((data:any)=>{
      console.log(data)
      this.name=data[0].Name;
      this.reg_num=data[0].Reg_No;
    }
  )


}
logout(){
  this.router.navigate([''])
  console.log("hello")
}

}
