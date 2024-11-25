import { Component, NgModule, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgModel } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
interface Category {
  name: string,
  code: string
}
@Component({
  selector: 'app-writeblog',
  standalone: true,
  imports: [NavBarComponent,MultiSelectModule,InputTextareaModule,InputTextModule,FormsModule,EditorModule],
  templateUrl: './writeblog.component.html',
  styleUrl: './writeblog.component.css'
})

export class WriteblogComponent  {

text: string='';


  submitBlog(){
    console.log(this.text)

  }


}