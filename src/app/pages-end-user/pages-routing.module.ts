import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index-page/index-page.module').then(m => m.IndexPageModule),
  },
  {
    path: 'gia-phong',
    loadChildren: () => import('./gia-phong-page/gia-phong-page.module').then(m => m.GiaPhongPageModule),
  },
  {
    path: 'cine-cafe',
    loadChildren: () => import('./cine-cafe-page/cine-cafe.module').then(m => m.CineCafeModule),
  },
  {
    path: 'dich-vu',
    loadChildren: () => import('./dich-vu-page/dich-vu.module').then(m => m.DichVuModule),
  },
  {
    path: 'thuc-don',
    loadChildren: () => import('./menu-page/menu-page.module').then(m => m.MenuPageModule),
  },
  {
    path: 'dat-phong-cine-cafe',
    loadChildren: () => import('./dat-phong-page/dat-phong-page.module').then(m => m.DatPhongPageModule),
  },
  {
    path: 'chi-duong',
    loadChildren: () => import('./chi-duong-page/chi-duong-page.module').then(m => m.ChiDuongPageModule),
  },
  {
    path: 'tin-tuc',
    loadChildren: () => import('./tin-tuc-page/tin-tuc-page.module').then(m => m.TinTucPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
