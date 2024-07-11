import { useContext } from 'react';
import {
    Button,
    Box,
    Typography
} from '@mui/material';

import { ConntectWalletContext } from './FuncConnect'
import CompSwitchChain from './CompSwitchChain'

const cBoxStyle = {
    border: 1,
    bgcolor: "background.default",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'top',
    mb: '0.2vw',
    mt: 0,
    p: '0.2vw',
}

const mBoxStyle = {
    border: 1,
    bgcolor: "transparent",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: '0.2vw', mt: '0.2vw', pt: '0.2vw',
    pl: '0.2vw', pr: '0.2vw',
}

const uTypStyle = {
    border: 1,
    bgcolor: "transparent",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: '0.2vw',
    p: '0.4vw', pl: '0.4vw',
}

function CompConnect() {

    const FuncConnect = useContext(ConntectWalletContext)
    const { account, connectors, connect, /* status, */ error, disconnect } = FuncConnect()

    return (
        <Box component={'div'} sx={mBoxStyle}>
            <Box component={'div'}>
                <Typography sx={uTypStyle} gutterBottom variant="body2" color="text.secondary">
                    Status: {account.status}
                    <br />
                    Address: {JSON.stringify(account.address)}
                    <br />
                    ChainId: {account.chainId}
                    <br />
                    Error: {error?.message !== undefined ? String(error?.message).split(".")[0] : ""}
                </Typography>

                <Box sx={cBoxStyle} component={'div'}>
                    {account.status === 'connected' && (
                        <Button size="small" onClick={() => disconnect()}>
                            Disconnect {account.address !== undefined ? " ~ " + String(account.chainId) + " ~ " + String(account.address) : ""}
                        </Button>
                    )}
                </Box>
            </Box>

            <Box component={'div'}>

                <Box sx={cBoxStyle} component={'div'}>
                    {connectors.map((connector) => (
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
                    ))}

                </Box>

                <CompSwitchChain />

            </Box>
        </Box>
    )
}

export default CompConnect
