import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiaPhongPageRoutingModule } from './gia-phong-page-routing.module';
import {GiaPhongPageComponent} from './gia-phong-page.component';

@NgModule({
  declarations: [
    GiaPhongPageComponent,
  ],
  imports: [
    CommonModule,
    GiaPhongPageRoutingModule,
  ],
})
export class GiaPhongPageModule { }
