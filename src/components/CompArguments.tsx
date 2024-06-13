import * as React from 'react';
import { Box, Button, LinearProgress } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

import {
    MainContext
} from '../context/MainContext';

import { useSwitchChain } from 'wagmi'
import { Address } from 'viem';

import { ConntectWalletContext } from './FuncConnect'
import { MintTransactionContext } from './FuncMint'
import { useContext } from 'react';

import CompSnacks from './CompSnacks'

const argumentsBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    ml: 0,
    mt: -2,
    border: 0,
    width: '100%',
}

const accordionStyle = {
    p: 0,
    mt: 0,
    mb: 0,
    width: '100%'
}

const accordionSummaryStyle = {
    display: 'grid',
    justifyContent: 'start',
    p: 0,
    mt: 0,
    mb: 0,
    bgcolor: 'black'
}

const colletButtonStyle = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    mt: 0,
}

const mintButtonStyle = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    mt: 1
}

const accordionDetailsStyle = {
    width: '100%',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    mb: 2
}

const uTypStyle = {
    bgcolor: "background.default",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: 0,
    p: 0.5,
    pl: 0.5,
}

interface WalletStatusProps {
    mint: () => void;
    mintable: boolean;
    pending: boolean;
}

function WalletStatusConnectMint(props: WalletStatusProps) {

    const { mint, mintable, pending } = props;

    const { chains, switchChain } = useSwitchChain();

    const data = useContext(MainContext);

    const FuncConnect = useContext(ConntectWalletContext);
    const { account } = FuncConnect();

    const baseChainId: number = 8453;
    const baseSepholiaId: number = 84532;

    //Base Mainnet: 8453
    //Zora Mainnet: 7777777

    if (account?.chainId === undefined) {
        return (
            <Button onClick={() => data?.setOpenModalConnect(true)} sx={mintButtonStyle} size="small" >
                [ connect wallet ]
            </Button>
        )
    }
    else if (account?.chainId === baseSepholiaId) {
        return (
            <Button onClick={mint} sx={mintButtonStyle} size="small" disabled={mintable || pending}>
                [ mint ]
            </Button>
        )
    }
    else if (account?.chainId !== baseChainId) {
        return (
            <Button onClick={() => switchChain({ chainId: chains[0]?.id })} sx={mintButtonStyle} size="small" >
                [ switch to base ]
            </Button>
        )
    }
    else if (account?.chainId === baseChainId) {
        return (
            <Button onClick={mint} sx={mintButtonStyle} size="small" disabled={mintable || pending}>
                [ mint ]
            </Button>
        )
    }
    else {
        return (
            <Button onClick={() => data?.setOpenModalConnect(true)} sx={mintButtonStyle} size="small" >
                [ connect wallet ]
            </Button>
        )
    }
}

function CompArguments() {

    const [comment, setComment] = React.useState<string>("");

    const [value, setValue] = React.useState(1);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (event)
            setValue(newValue as number);
    };

    const erc1155Address: Address = "0x743a00292526d31345ee933cc8e91ddf8ff3f047";
    const tokenId: bigint = BigInt(1);

    const FuncMint = useContext(MintTransactionContext);
    const { isPending, isConfirmed, mint, error, data } = FuncMint({ erc1155Address, tokenId, quantity: value, comment });

    return (
        <Box
            sx={argumentsBoxStyle}
            component={'div'}
        >
            <Accordion
                disableGutters
                sx={accordionStyle}
                style={{ background: 'black' }}
            >
                <AccordionSummary
                    sx={accordionSummaryStyle}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Button sx={colletButtonStyle} href="" size="small" >
                        [ collect ]
                    </Button>
                </AccordionSummary>

                <AccordionDetails sx={accordionDetailsStyle}>

                    <Typography sx={uTypStyle} variant="subtitle1" color="rgb(255,255,255,0.6)">
                        Zora ERC-1155 Contract on Base Mainnet...
                    </Typography>


                    <Box sx={{ display: 'flex', direction: 'column', width: '100%', pr: 0.4 }} component={'div'}>
                        <Typography sx={uTypStyle} variant="subtitle1" color="rgb(255,255,255,0.6)">
                            Quantity: {value}
                        </Typography>
                        <Slider
                            sx={{ width: '370%', pb: 2 }}
                            aria-label="Small steps"
                            size="small"
                            defaultValue={1}
                            onChange={handleSliderChange}
                            step={3}
                            marks
                            min={1}
                            max={99}
                        />
                    </Box>

                    <TextField onChange={(e) => { setComment(e.target.value) }} fullWidth name="commentfield" label="comment" id="comment" size="small" />

                    <WalletStatusConnectMint mint={mint} mintable={Boolean(data === undefined)} pending={isPending} />

                </AccordionDetails>

                {isPending ? (
                    <LinearProgress sx={{ mt: 1, mb: 1, bgcolor: 'primary.light' }} />
                ) : (
                    ''
                )}

            </Accordion>

            <CompSnacks writeConfirmed={isConfirmed} writeError={error} />
        </Box>
    );
}

export default CompArguments