//import * as React from 'react';
//import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import CompMusic from './CompMusic'

const mBoxStyle = {
    width: '100%',
    //height: '10vh',
}

const mBoxSx = {
    display: 'grid',
    border: 1,
    borderColor: "secondary.light",
    p: '0.2vw'
}

export default function PageMusic() {
    return (
        <Box component={'div'}
            style={mBoxStyle}
            sx={mBoxSx}
        >
            {/* <Skeleton sx={{ bgcolor: "secondary.light" }} /> */}
            <CompMusic />
        </Box>
    );
}