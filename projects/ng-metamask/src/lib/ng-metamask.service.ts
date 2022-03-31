import { Inject, Injectable } from '@angular/core';
import { RPCRequestArguments } from './types/RPCRequestArguments.interface';
import { from, Observable } from 'rxjs';
import { ETHProviderInjector, ETHProviderToken } from './providers';
import { EthereumProvider } from './types/ETHProvider.interface';
import { providers } from 'ethers';
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

@Injectable({
  providedIn: 'root',
})
export class NgMetamaskService {
  constructor(
    @Inject(ETHProviderToken) private readonly ethProvider: providers.Web3Provider
  ) {}

  requestLogin$<ARG = unknown, ExpectedResult = unknown>(
    args: RPCRequestArguments<ARG> = { method: 'eth_accounts', params: {} }
  ): Observable<ExpectedResult> {
    return from([]);
  }
}
