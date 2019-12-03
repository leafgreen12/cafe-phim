import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GiaPhongPageComponent} from './gia-phong-page.component';

const routes: Routes = [
  {
    path: '',
    component: GiaPhongPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class GiaPhongPageRoutingModule {
}
