import * as React from 'react';
import { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SetStateAction } from 'react';

export default function CustomizedSnackbars(props: any) {

    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<SetStateAction<any>>();

    useEffect(() => {
        if (props.writeConfirmed) {
            setOpen(true);
            setSeverity('success');
        }
        else if (props.writeError?.message !== undefined) {
            setOpen(true);
            setSeverity('error');
        }
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
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    variant="outlined"
                    onClose={handleClose}
                    sx={{
                        width: '100%',
                        bgcolor: 'black',
                        borderColor: "secondary.light",
                        color: "rgb(255,255,255,0.8)"
                    }}
                    severity={severity}
                >
                    {(props.writeConfirmed) ? 'Transaction confirmed.' : ''}
                    {(props.writeError?.message !== undefined) ? String(props.writeError?.message).split('\n')?.[0] : ''}
                </Alert>
            </Snackbar>
        </div>
    );
}