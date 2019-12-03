import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirebaseService} from './firebase.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})

export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        FirebaseService,
      ],
    };
  }
}
