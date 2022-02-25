import { Provider } from "@angular/core";
import detectEthereumProvider from '@metamask/detect-provider'

async function getEhProvider() {
  return await detectEthereumProvider();
}


export const providers: Provider[] = [
  
]
