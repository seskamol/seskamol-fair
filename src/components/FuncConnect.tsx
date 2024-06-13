import { createContext } from "react";
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function FuncConnect() {

    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        { account, connectors, connect, status, error, disconnect }
    )
}

type ConntectWalletContextProviderProps = {
    children: React.ReactNode
}

export const ConntectWalletContext = createContext(FuncConnect);

export const ConntectWalletContextProvider = ({
    children,
}: ConntectWalletContextProviderProps) => {
    return <ConntectWalletContext.Provider value={FuncConnect}> {children} </ConntectWalletContext.Provider>
}
