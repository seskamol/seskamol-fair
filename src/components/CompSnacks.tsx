import * as React from 'react';
import { useEffect } from 'react';
//import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props: any) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (!props.confirmed) return;
        setOpen(true);
    }, [props]);

    // @ts-ignore
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Transaction confirmed.
                </Alert>
            </Snackbar>
        </div>
    );
}