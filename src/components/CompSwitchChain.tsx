//
import { useSwitchChain } from 'wagmi'
import { Button, Box } from '@mui/material';
import { cBoxStyle } from '../theme/Sx'

function CompSwitchChain() {

    const { chains, switchChain } = useSwitchChain()

    return (
        <Box sx={cBoxStyle} component={'div'}>
            {chains.map((chain) => (
                <Button size="small" key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
                    {chain.name}
                </Button>
            ))}
        </Box>
    )
}

export default CompSwitchChain