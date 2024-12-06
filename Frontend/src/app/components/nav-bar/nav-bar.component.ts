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
branch:string='';
profid:any=0;
ngOnInit(): void {
  this.userId =sessionStorage.getItem('uid')
  this.api.getUserByID(this.userId).subscribe((data:any)=>{
      console.log(data)
      this.profid=data[0].profileid;
      sessionStorage.setItem('pid',this.profid)
      this.name=data[0].name;
      this.reg_num=data[0].regno;
      this.branch=data[0].branch;
      
    }
  )


}
logout(){
  this.router.navigate([''])
  console.log("hello")
}
nav(profid1:number)
{
   this.router.navigate(['/manage',profid1])
}

}
