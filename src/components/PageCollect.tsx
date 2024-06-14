//import * as React from 'react';
import Box from '@mui/material/Box';

import CompCollect from './CompCollect';

const mBoxStyle = {
    width: '100%',
    //height: '10vh',
}

const mBoxSx = {
    display: 'grid',
    border: 1,
    borderColor: "secondary.light",
    p: 1
}

export default function PageCollect() {
    return (
        <Box component={'div'}
            style={mBoxStyle}
            sx={mBoxSx}
        >
            <CompCollect />
        </Box>
    );
}