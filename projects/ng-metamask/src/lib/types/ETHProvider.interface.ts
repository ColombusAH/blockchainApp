import { RPCRequestArguments } from './RPCRequestArguments.interface';

export interface EthereumProvider {
  isMetaMask?: boolean;
  request: <ARG = unknown, ExpectedResult = unknown>(
    args: RPCRequestArguments<ARG>
  ) => Promise<ExpectedResult>;
}
