import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-writeblog',
  standalone: true,
  imports: [
    NavBarComponent,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css']
})
export class WriteblogComponent {
  text: string = ''; 

  constructor(private api: ApiserviceService) {}

  
  encodeHtmlEntities(html: string): string {
    const textarea = document.createElement('textarea');
    textarea.textContent = html;
    return textarea.innerHTML;
  }

  
  submitBlog() {
    if (!this.text.trim()) {
      console.log('Blog content is empty. Please write something!');
      return;
    }

    const encodedText = this.encodeHtmlEntities(this.text); 
    console.log('Encoded blog content:', encodedText);

    this.api.postblog({ content: encodedText }).subscribe(
      (response) => {
        console.log('Blog submitted successfully:', response);
        alert('Blog submitted successfully!');
        this.text = ''; 
      },
      (error) => {
        console.error('Error submitting blog:', error);
        alert('Failed to submit the blog. Please try again.');
      }
    );
  }
}
