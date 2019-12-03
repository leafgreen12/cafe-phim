import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainsRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HeaderComponent} from './header/header.component';
import {PagesEndUserModule} from '../pages-end-user/pages-end-user.module';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainsRoutingModule,
    PagesEndUserModule,
  ],
})
export class MainModule {
}
