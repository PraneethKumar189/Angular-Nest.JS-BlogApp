import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [AdminComponent, RouterOutlet, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'], 
})
export class AddUserComponent {
  constructor(private api: ApiserviceService) {}

  submitForm(fv: any) {
    console.log(fv);
    this.api.registerUser(fv);
  }
}
