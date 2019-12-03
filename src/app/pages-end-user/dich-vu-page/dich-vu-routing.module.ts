import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DichVuPageComponent} from './dich-vu-page.component';

const routes: Routes = [
  {
    path: '',
    component: DichVuPageComponent,
  },
  {
    path: ':key',
    loadChildren: () => import('./menu-dich-vu/menu-dich-vu-page.module').then(m => m.MenuDichVuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DichVuRoutingModule {
}
