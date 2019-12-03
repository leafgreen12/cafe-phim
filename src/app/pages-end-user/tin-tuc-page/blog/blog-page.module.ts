import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import {BlogPageComponent} from './blog-page.component';

@NgModule({
  declarations: [
    BlogPageComponent,
  ],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
  ],
})
export class BlogPageModule { }
