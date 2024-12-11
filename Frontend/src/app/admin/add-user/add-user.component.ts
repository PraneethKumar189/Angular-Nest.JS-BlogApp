import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [AdminComponent, RouterOutlet, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'], 
})
export class AddUserComponent {
  constructor(private http: HttpClient) {}

  submitForm(fv: any) {
    console.log('Form Value:', fv);

    // Ensure the API endpoint is correct and properly handles the incoming data
    this.http
      .post('http://localhost:3000/profile-controller/register', fv, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (response) => {
          console.log('User added successfully:', response);
          alert('User added successfully!');
        },
        error: (err) => {
          console.error('Error adding user:', err);
          alert('Failed to add user. Please try again.');
        },
      });
  }
}
