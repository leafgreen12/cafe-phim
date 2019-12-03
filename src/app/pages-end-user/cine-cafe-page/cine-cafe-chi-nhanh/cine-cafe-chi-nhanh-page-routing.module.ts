import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CineCafeChiNhanhPageComponent} from './cine-cafe-chi-nhanh-page.component';

const routes: Routes = [
  {
    path: '',
    component: CineCafeChiNhanhPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CineCafeChiNhanhPageRoutingModule {
}
