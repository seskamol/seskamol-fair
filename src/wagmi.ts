import { http, createConfig } from 'wagmi'
import { base, zora } from 'wagmi/chains'
import { /* coinbaseWallet, */ injected, /* walletConnect */ } from 'wagmi/connectors'

export const config = createConfig({
  chains: [base, zora],
  connectors: [
    injected(),
    /* coinbaseWallet({ appName: 'seskamol' }), */
    //walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
