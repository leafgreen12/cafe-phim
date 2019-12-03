import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CineCafePageComponent} from './cine-cafe-page.component';

const routes: Routes = [
  {
    path: '',
    component: CineCafePageComponent
  },
  {
    path: ':key',
    loadChildren: () => import('./cine-cafe-chi-nhanh/cine-cafe-chi-nhanh-page.module').then(m => m.CineCafeChiNhanhPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CineCafeRoutingModule {
}
