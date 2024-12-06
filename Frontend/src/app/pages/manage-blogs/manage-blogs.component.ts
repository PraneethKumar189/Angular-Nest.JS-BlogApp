import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-manage-blogs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './manage-blogs.component.html',
  styleUrl: './manage-blogs.component.css'
})
export class ManageBlogsComponent implements OnInit {
  id:any;
  res:any;
  cent:string="center";
  constructor(private route:ActivatedRoute,private api:ApiserviceService){}
 ngOnInit(): void {
   this.id=this.route.snapshot.paramMap.get('profid1')!;
   console.log(this.id)

   this.api.getblogsbyid(this.id).subscribe(data=>{
    console.log(data)
    this.res=data;
   })
 }
 deleteBlog(id1:number){
  console.log(id1)
  return this.api.deletePostById(id1)
 }
}
