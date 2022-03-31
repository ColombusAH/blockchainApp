import { Provider } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { EthereumProvider } from './types/ETHProvider.interface';
import {providers} from 'ethers';

export const providerss: Provider[] = [];

export const ETHProviderInjector = new InjectionToken(
  'ETH Provider Injector Token',
  {
    providedIn: 'root',
    factory: () => {
      const ethProvider =
        ((inject(DOCUMENT).defaultView as any)?.ethereum as EthereumProvider) ||
        undefined;
      console.log({ ethProvider });
      if (!ethProvider) {
        throw new Error('Please install MetaMask extension');
      }
      return ethProvider;
    },
  }
);



export const ETHProviderToken = new InjectionToken<providers.Web3Provider>('Web3Provider', { providedIn: "root", factory: () => new providers.Web3Provider((window as any).ethereum)})