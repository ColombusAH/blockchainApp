import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgmetamaskComponent } from './ng-metamask.component';
import { providers } from './providers';

@NgModule({
  declarations: [NgmetamaskComponent],
  imports: [],
  exports: [NgmetamaskComponent],
})
export class NgMetamaskModule {
  static forRoot(): ModuleWithProviders<NgMetamaskModule> {
    return {
      ngModule: NgMetamaskModule,
      providers,
    };
  }
}
