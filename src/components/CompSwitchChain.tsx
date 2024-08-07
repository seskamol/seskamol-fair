import { useSwitchChain } from 'wagmi'
import { Button, Box } from '@mui/material';

export const cBoxStyle = {
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

function CompSwitchChain() {

    const { chains, switchChain } = useSwitchChain()

    return (
        <Box sx={cBoxStyle} component={'div'}>
            {chains.map((chain) => (
                <Button sx={{ pl: 1.6, mr: 0.5, pt: 0.08, pb: 0.03 }} variant="outlined" size="small" key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
                    {chain.name}
                </Button>
            ))}
        </Box>
    )
}

export default CompSwitchChain