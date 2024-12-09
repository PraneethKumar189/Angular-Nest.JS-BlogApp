import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [AdminComponent,RouterOutlet],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

}
