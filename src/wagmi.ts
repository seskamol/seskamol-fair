import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, zora, zoraSepolia, base, baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia, zora, zoraSepolia, base, baseSepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'seskamol' }),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [zora.id]: http(),
    [zoraSepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
