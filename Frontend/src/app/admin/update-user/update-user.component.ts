import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [AdminComponent,RouterOutlet],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

}
