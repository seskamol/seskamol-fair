import { useAccount, useConnect, useDisconnect } from 'wagmi'

import { Button, Box, Typography } from '@mui/material';
import { cBoxStyle } from '../theme/Sx'

import CompSwitchChain from './CompSwitchChain'

export const mBoxStyle = {
    border: 1,
    bgcolor: "transparent",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: 1, mt: 1, pt: 1,
    pl: 1, pr: 1,
}

export const uTypStyle = {
    border: 1,
    bgcolor: "transparent",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: 1,
    p: 1, pl: 1.3,
}

function CompConnect() {
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        <Box component={'div'} sx={mBoxStyle}>
            <Box component={'div'}>
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
                        <>
                            <Button
                                size="small"
                                key={connector.uid}
                                onClick={() => connect({ connector })}
                                type="button"
                                variant="outlined"
                                sx={{ pl: 1.6, mr: 0.5 }}
                            >
                                {connector.name}
                            </Button>
                        </>
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
