import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgMetmaskComponent } from './ng-metmask.component';
import { providers } from './providers';

@NgModule({
  declarations: [NgMetmaskComponent],
  imports: [],
  exports: [NgMetmaskComponent],
})
export class NgMetamaskModule {
  static forRoot(): ModuleWithProviders<NgMetamaskModule> {
    return {
      ngModule: NgMetamaskModule,
      providers,
    };
  }
}
