import { Component, OnInit } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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

  constructor(private api:ApiserviceService){}
sidebarVisible2:boolean=false;
userId:any;
ngOnInit(): void {
  this.userId =sessionStorage.getItem('uid')
  this.api.getUserByID(this.userId).subscribe((data:any)=>{
      console.log(data)
    }
  )


}

}
