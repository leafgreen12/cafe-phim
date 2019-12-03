import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KhuyenMaiPageComponent} from './khuyen-mai-page.component';

const routes: Routes = [
  {
    path: '',
    component: KhuyenMaiPageComponent
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
  exports: [RouterModule]
})
export class KhuyenMaiPageRoutingModule {
}
