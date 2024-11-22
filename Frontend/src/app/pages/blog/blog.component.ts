import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ApiserviceService } from '../../services/apiservice.service';
import { DatePipe, NgFor } from '@angular/common';
import { Router, } from '@angular/router';
import { FullblogComponent } from '../fullblog/fullblog.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavBarComponent,NgFor,DatePipe],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  data1:any;
constructor(private api:ApiserviceService,private router: Router){}
ngOnInit(): void {
  this.api.getblog().subscribe(data=>
  {
    console.log(data);
    this.data1=data;
  }
  )
}
navigateToBlog(value:any){
  this.router.navigate(['/fullblog']);
  console.log(value);
  sessionStorage.setItem('id',value)
}
  
}
