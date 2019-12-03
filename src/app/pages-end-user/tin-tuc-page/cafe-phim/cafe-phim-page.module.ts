import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafePhimPageRoutingModule } from './cafe-phim-page-routing.module';
import {CafePhimPageComponent} from './cafe-phim-page.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CafePhimPageComponent,
  ],
  imports: [
    CommonModule,
    CafePhimPageRoutingModule,
    NgxPaginationModule,
  ],
})
export class CafePhimPageModule { }
