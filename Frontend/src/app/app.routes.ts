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
import { AuthGaurd } from './guard/authgaurd.guard';

export const routes: Routes = [
    {path:'',redirectTo:'/signin', pathMatch:'full'},
    {path:'signin',component:SigninComponent},
    {path:'home',component:HomeComponent,canActivate:[AuthGaurd]},
    {path:'readBlog',component:BlogComponent,canActivate:[AuthGaurd]},
    {path:'fullblog',component:FullblogComponent,canActivate:[AuthGaurd]},
     {path:'write',component:WriteblogComponent,canActivate:[AuthGaurd]},
    {path:'magList',component:MagzineHomeComponent,canActivate:[AuthGaurd]},
{path:'magRead',component:MagzineReadComponent,canActivate:[AuthGaurd]}];
