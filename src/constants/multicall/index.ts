import { ChainId } from '@wangxc/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.GANACHE]: '0x73479894d7B0cA08753f3477d4987A1D8a5CD43F',
  [ChainId.AVALANCHE_C_CHAIN_TESTNET]: '0xe109b05A953e87b166E9ddd9Dd49371b9aeC0456'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }