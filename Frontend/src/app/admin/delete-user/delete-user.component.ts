import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [RouterOutlet,AdminComponent],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {

}
