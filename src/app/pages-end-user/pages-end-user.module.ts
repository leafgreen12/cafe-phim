import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import {IndexPageModule} from './index-page/index-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IndexPageModule,
  ],
})
export class PagesEndUserModule { }
