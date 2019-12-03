import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineCafeChiNhanhPageRoutingModule } from './cine-cafe-chi-nhanh-page-routing.module';
import {CineCafeChiNhanhPageComponent} from './cine-cafe-chi-nhanh-page.component';

@NgModule({
  declarations: [
    CineCafeChiNhanhPageComponent,
  ],
  imports: [
    CommonModule,
    CineCafeChiNhanhPageRoutingModule,
  ],
})
export class CineCafeChiNhanhPageModule { }
