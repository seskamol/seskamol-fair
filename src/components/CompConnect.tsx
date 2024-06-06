import { useAccount, useConnect, useDisconnect } from 'wagmi'

import { Button, Box, Typography } from '@mui/material';
import { mBoxStyle, cBoxStyle } from '../theme/Sx'

import CompSwitchChain from './CompSwitchChain'

export const uTypStyle = {
    border: 1,
    bgcolor: "background.default",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: 1,
    p: 0.5,
    pl: 1.0,
}

function CompConnect() {
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        <Box sx={mBoxStyle} component={'div'} /* style={{ position: 'fixed'}} */>
            <Box component={'div'}>
                {/* <Typography>{JSON.stringify(account.connector?.icon)}</Typography> */}

                <Typography sx={uTypStyle} gutterBottom variant="body2" color="text.secondary">
                    Status: {account.status}
                    <br />
                    Address: {JSON.stringify(account.address)}
                    <br />
                    ChainId: {account.chainId}
                </Typography>
                <Box sx={cBoxStyle} component={'div'}>
                    {account.status === 'connected' && (
                        <Button size="small" onClick={() => disconnect()}>
                            Disconnect
                        </Button>
                    )}
                </Box>
            </Box>

            <Box component={'div'}>
                {/* <Typography sx={uTypStyle}>Connect</Typography> */}
                <Box sx={cBoxStyle} component={'div'}>
                    {connectors.map((connector) => (
                        <Button
                            size="small"
                            key={connector.uid}
                            onClick={() => connect({ connector })}
                            type="button"
                        >
                            {connector.name}
                        </Button>
                    ))}
                </Box>

                <CompSwitchChain />

                <Typography sx={uTypStyle} gutterBottom variant="body2" color="text.secondary">
                    Status: {status}
                </Typography>
                <Typography sx={uTypStyle} gutterBottom variant="body2" color="text.secondary">
                    Error: {error?.message}
                </Typography>
            </Box>
        </Box>
    )
}

export default CompConnect
