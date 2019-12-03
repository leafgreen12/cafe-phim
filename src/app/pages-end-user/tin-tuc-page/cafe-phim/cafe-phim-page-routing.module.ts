import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CafePhimPageComponent} from './cafe-phim-page.component';

const routes: Routes = [
  {
    path: '',
    component: CafePhimPageComponent,
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
export class CafePhimPageRoutingModule {
}
