import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { DatePipe, NgIf } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-fullblog',
  standalone: true,
  imports: [RouterOutlet, NgIf, DatePipe, NavBarComponent],
  templateUrl: './fullblog.component.html',
  styleUrls: ['./fullblog.component.css'] // Fixed typo: styleUrl -> styleUrls
})
export class FullblogComponent implements OnInit {
  blog: any; // Raw blog data from the API
  decodedBlogContent: string = ''; // Decoded blog content to render

  constructor(private route: ActivatedRoute, private api: ApiserviceService) {}

  ngOnInit(): void {
    // Fetch the blog ID from sessionStorage
    const blogId = sessionStorage.getItem('id');
    console.log('Blog ID:', blogId);

    if (blogId) {
      // Fetch blog data by ID
      this.api.getblogbyid(blogId).subscribe(
        (data: any) => {
          console.log('Raw Blog Data:', data);
          this.blog = data;

          // Decode the HTML content
          this.decodedBlogContent = this.decodeHtmlEntities(data.content || '');
          console.log('Decoded Blog Content:', this.decodedBlogContent);
        },
        (error) => {
          console.error('Error fetching blog data:', error);
        }
      );
    }
  }

  // Utility function to decode HTML entities
  decodeHtmlEntities(encodedHtml: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = encodedHtml;
    return textarea.value;
  }
}
