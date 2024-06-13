//import * as React from 'react';
import { Box } from '@mui/material';

import CompRoutes from './CompRoutes'

export default function CompMenu() {
    return (
        <Box
            component={"div"}
            sx={{ border: 1, borderColor: 'secondary.light' }}
        >
            <CompRoutes />

        </Box>

    );
}