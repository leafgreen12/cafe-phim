import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhuyenMaiPageRoutingModule } from './khuyen-mai-page-routing.module';
import {KhuyenMaiPageComponent} from './khuyen-mai-page.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    KhuyenMaiPageComponent,
  ],
  imports: [
    CommonModule,
    KhuyenMaiPageRoutingModule,
    NgxPaginationModule,
  ],
})
export class KhuyenMaiPageModule { }
