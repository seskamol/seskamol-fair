//import * as React from 'react';
import Box from '@mui/material/Box';

import CompSculpture from './CompSculpture'

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

export default function PageSculpture() {
    return (
        <Box component={'div'}
            style={mBoxStyle}
            sx={mBoxSx}
        >
            <CompSculpture />
        </Box>
    );
}