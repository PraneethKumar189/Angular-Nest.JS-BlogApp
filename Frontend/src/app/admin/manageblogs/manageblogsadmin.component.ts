import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgFor } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-manageblogs',
  standalone: true,
  imports: [NgFor,RouterOutlet,AdminComponent],
  templateUrl: './manageblogs.component.html',
  styleUrl: './manageblogs.component.css'
})
export class ManageblogsComponent {
  id:any;
  res:any;
  cent:string="center";
  constructor(private route:ActivatedRoute,private api:ApiserviceService,private messageService: MessageService){}
 ngOnInit(): void {
  this.loadData()
 }
 loadData(){


   this.api.getblog().subscribe(data=>{
    console.log(data)
    this.res=data;
   })
 }



 deleteBlog(id1:number){
  console.log(id1)
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Blog deleted' });

  return this.api.deletePostById(id1)
  
  
 }

}
