import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatPhongPageComponent} from './dat-phong-page.component';
import {DatPhongPageRoutingModule} from './dat-phong-page-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DatPhongPageComponent,
  ],
  imports: [
    CommonModule,
    DatPhongPageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class DatPhongPageModule { }
