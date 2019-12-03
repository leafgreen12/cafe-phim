import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageRoutingModule } from './index-page-routing.module';
import {IndexPageComponent} from './index-page.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    IndexPageComponent,
  ],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    NgbCarouselModule,
  ],
})
export class IndexPageModule { }
