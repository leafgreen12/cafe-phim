import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuyenDungPageRoutingModule } from './tuyen-dung-page-routing.module';
import {TuyenDungPageComponent} from './tuyen-dung-page.component';

@NgModule({
  declarations: [
    TuyenDungPageComponent,
  ],
  imports: [
    CommonModule,
    TuyenDungPageRoutingModule,
  ],
})
export class TuyenDungPageModule { }
