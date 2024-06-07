//
import * as React from 'react';
import { Box, Button, LinearProgress } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

import CompSnacks from './CompSnacks'

import { MintNFT } from './FuncMint';

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

function CompArguments() {

    const [comment, setComment] = React.useState<string>("");

    const [value, setValue] = React.useState(1);
    // @ts-ignore
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const { isPending, isConfirmed, submit } = MintNFT({ quantity: value, comment });

    //console.log(isPending, isConfirming, isConfirmed, error,)

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
                        ERC-1155 Zora Contract on Base Mainnet...
                    </Typography>


                    <Box sx={{ display: 'flex', direction: 'column', width: '100%', pr: 0.4 }} component={'div'}>
                        <Typography sx={uTypStyle} variant="subtitle1" color="rgb(255,255,255,0.6)">
                            quantity: {value}
                        </Typography>
                        <Slider
                            sx={{ width: '650%', pb: 1 }}
                            aria-label="Small steps"
                            size="small"
                            defaultValue={1}
                            onChange={handleSliderChange}
                            step={1}
                            marks
                            min={1}
                            max={50}
                        />
                    </Box>

                    <TextField onChange={(e) => { setComment(e.target.value) }} fullWidth name="commentfield" label="comment" id="comment" size="small" />

                    <Button onClick={submit} sx={mintButtonStyle} size="small" >
                        [ mint ]
                    </Button>

                </AccordionDetails>

                {isPending ? (
                    <LinearProgress sx={{ mt: 1 }} />
                ) : (
                    ''
                )}

            </Accordion>

            <CompSnacks confirmed={isConfirmed} />
        </Box>
    );
}

export default CompArguments