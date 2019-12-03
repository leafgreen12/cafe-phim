import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineCafeRoutingModule } from './cine-cafe-routing.module';
import {CineCafePageComponent} from './cine-cafe-page.component';

@NgModule({
  declarations: [
    CineCafePageComponent
  ],
  imports: [
    CommonModule,
    CineCafeRoutingModule,
  ]
})
export class CineCafeModule { }
