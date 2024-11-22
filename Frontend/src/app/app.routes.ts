import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { FullblogComponent } from './pages/fullblog/fullblog.component';
import { WriteblogComponent } from './pages/writeblog/writeblog.component';
import { MagzineHomeComponent } from './pages/magzine-home/magzine-home.component';
import { MagzineReadComponent } from './pages/magzine-read/magzine-read.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    {path:'',component:SigninComponent},
    {path:'home',component:HomeComponent},
    {path:'readBlog',component:BlogComponent},
    {path:'fullblog',component:FullblogComponent},
     {path:'write',component:WriteblogComponent},
    {path:'magList',component:MagzineHomeComponent},
{path:'magRead',component:MagzineReadComponent}];
