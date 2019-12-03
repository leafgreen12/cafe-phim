import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DichVuRoutingModule} from './dich-vu-routing.module';
import {DichVuPageComponent} from './dich-vu-page.component';

@NgModule({
  declarations: [
    DichVuPageComponent,
  ],
  imports: [
    CommonModule,
    DichVuRoutingModule,
  ],
})
export class DichVuModule { }
