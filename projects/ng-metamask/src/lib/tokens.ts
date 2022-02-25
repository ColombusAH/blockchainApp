import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const ETHProviderInjector = new InjectionToken(
  'ETH Provider Injector Token',
  {
    providedIn: 'root',
    factory: () => {
      const ethProvider = inject(DOCUMENT).defaultView?.ethereum;
      console.log(ethProvider);
      if(!ethProvider) {
        throw new Error('Please install MetaMask extension');
      }
      return ethProvider;
    },
  }
);
