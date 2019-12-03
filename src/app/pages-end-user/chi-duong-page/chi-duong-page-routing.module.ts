import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChiDuongPageComponent} from './chi-duong-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChiDuongPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ChiDuongPageRoutingModule {
}
