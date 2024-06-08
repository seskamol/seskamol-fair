import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function FuncConnect() {

    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        { account, connectors, connect, status, error, disconnect }
    )
}