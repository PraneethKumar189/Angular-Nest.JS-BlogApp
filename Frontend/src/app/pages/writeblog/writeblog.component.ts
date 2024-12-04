import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ApiserviceService } from '../../services/apiservice.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-writeblog',
  standalone: true,
  imports: [
    NavBarComponent,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    EditorModule,
    NgIf
],
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css'],
})
export class WriteblogComponent {
  text: string = ''; // Full blog content from editor
  extractedTitle: string = ''; // Title extracted from the editor
  extractedImage: string = ''; // First image URL extracted from the editor

  constructor(private api: ApiserviceService) {}

  /**
   * Extract title, image, and other content from the rich text editor.
   */
  parseContent(): void {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.text, 'text/html');

    // Extract the first header (used as the title)
    const header = doc.querySelector('h1, h2, h3');
    this.extractedTitle = header ? header.textContent?.trim() || '' : 'Untitled Blog';

    // Extract the first image (used as the main image)
    const img = doc.querySelector('img');
    this.extractedImage = img ? img.getAttribute('src') || '' : '';

    console.log('Extracted Title:', this.extractedTitle);
    console.log('Extracted Image:', this.extractedImage);
  }

  /**
   * Submit the blog to the backend.
   */
  submitBlog(): void {
    if (!this.text.trim()) {
      alert('Blog content is empty. Please write something!');
      return;
    }

    // Parse the content
    this.parseContent();

    // Prepare the blog object to match the backend Blog entity
    const blogData = {
      title: this.extractedTitle,
      image: this.extractedImage,
      blog: this.text, // Full blog content as HTML
    };

    console.log('Blog Data:', blogData);

    // Submit the blog to the backend
    this.api.postblog(blogData).subscribe(
      (response) => {
        console.log('Blog submitted successfully:', response);
        alert('Blog submitted successfully!');
        this.text = ''; // Reset the editor content
        this.extractedTitle = '';
        this.extractedImage = '';
      },
      (error) => {
        console.error('Error submitting blog:', error);
        alert('Failed to submit the blog. Please try again.');
      }
    );
  }
}
