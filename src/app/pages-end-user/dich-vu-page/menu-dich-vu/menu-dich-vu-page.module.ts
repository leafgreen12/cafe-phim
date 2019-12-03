import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDichVuPageRoutingModule } from './menu-dich-vu-page-routing.module';
import {MenuDichVuPageComponent} from './menu-dich-vu-page.component';

@NgModule({
  declarations: [
    MenuDichVuPageComponent,
  ],
  imports: [
    CommonModule,
    MenuDichVuPageRoutingModule,
  ],
})
export class MenuDichVuPageModule { }
