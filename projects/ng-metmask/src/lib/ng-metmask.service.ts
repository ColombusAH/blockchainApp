import {Inject, Injectable} from '@angular/core';
import {ETHProviderInjector} from "./tokens";

@Injectable({
  providedIn: 'root'
})
export class NgMetamaskService {

  constructor(@Inject(ETHProviderInjector) private ethProvider: any) {
    console.log(this.ethProvider)
  }
}
