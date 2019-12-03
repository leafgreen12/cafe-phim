import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TinTucPageRoutingModule} from './tin-tuc-page-routing.module';
import {TinTucPageComponent} from './tin-tuc-page.component';

@NgModule({
  declarations: [
    TinTucPageComponent,
  ],
  imports: [
    CommonModule,
    TinTucPageRoutingModule,
  ],
})
export class TinTucPageModule { }
