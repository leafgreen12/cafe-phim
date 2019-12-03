import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuDichVuPageComponent} from './menu-dich-vu-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuDichVuPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MenuDichVuPageRoutingModule {
}
