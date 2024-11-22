import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { DatePipe, NgIf } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
@Component({
  selector: 'app-fullblog',
  standalone: true,
  imports: [RouterOutlet,NgIf,DatePipe,NavBarComponent],
  templateUrl: './fullblog.component.html',
  styleUrl: './fullblog.component.css'
})
export class FullblogComponent implements OnInit {
  constructor(private route:ActivatedRoute,private api:ApiserviceService){}

  blog:any;
  ngOnInit(): void {
    const blogId = sessionStorage.getItem('id') 
    console.log(blogId)
    if(blogId){
          this.api.getblogbyid(blogId).subscribe(data=>{
            console.log(data);
            this.blog=data;
          })
    }
  }

}
