import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TuyenDungPageComponent} from './tuyen-dung-page.component';

const routes: Routes = [
  {
    path: '',
    component: TuyenDungPageComponent,
  },
  {
    path: ':key',
    loadChildren: () => import('../blog/blog-page.module').then(m => m.BlogPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class TuyenDungPageRoutingModule {
}
