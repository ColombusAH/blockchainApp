type ETHMethodPrefix = 'eth_';

type RequestMethods =
  | 'accounts'
  | 'call'
  | 'getBalance'
  | 'sendTransaction'
  | 'sign';

type ETHRequestMethods = `${ETHMethodPrefix}${RequestMethods}`;
export interface RPCRequestArguments<T = unknown> {
  readonly method: ETHRequestMethods;
  readonly params?: readonly T[] | object;
}
