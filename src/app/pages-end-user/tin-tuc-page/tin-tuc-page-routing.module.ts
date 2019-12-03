import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TinTucPageComponent} from './tin-tuc-page.component';

const routes: Routes = [
  {
    path: '',
    component: TinTucPageComponent,
  },
  {
    path: 'cafe-phim',
    loadChildren: () => import('./cafe-phim/cafe-phim-page.module').then(m => m.CafePhimPageModule),
  },
  {
    path: 'khuyen-mai',
    loadChildren: () => import('./khuyen-mai/khuyen-mai-page.module').then(m => m.KhuyenMaiPageModule),
  },
  {
    path: 'tuyen-dung',
    loadChildren: () => import('./tuyen-dung/tuyen-dung-page.module').then(m => m.TuyenDungPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TinTucPageRoutingModule {
}
