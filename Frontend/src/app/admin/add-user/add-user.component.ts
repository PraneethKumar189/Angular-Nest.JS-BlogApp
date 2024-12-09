import { Component, NgModule } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [AdminComponent,RouterOutlet,FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private api:ApiService){}
submitForm(fv: any) {
console.log(fv)
this.api.registerUser(fv)
}

}
