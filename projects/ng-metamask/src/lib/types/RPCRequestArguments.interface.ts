export interface RPCRequestArguments<T = unknown> {
  readonly method: string;
  readonly params?: readonly T[] | object;
}
