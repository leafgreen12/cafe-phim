import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiDuongPageRoutingModule } from './chi-duong-page-routing.module';
import {ChiDuongPageComponent} from './chi-duong-page.component';

@NgModule({
  declarations: [
    ChiDuongPageComponent,
  ],
  imports: [
    CommonModule,
    ChiDuongPageRoutingModule,
  ],
})
export class ChiDuongPageModule { }
