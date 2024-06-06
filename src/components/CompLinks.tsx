//
import {
    Box,
    Button,
} from '@mui/material';

const linkBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    border: 1,
    borderColor: "secondary.light",
    p: 1,
    mt: 1
}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%'
}

function CompLinks() {
    return (
        <Box component={"div"} sx={linkBoxStyle}>

            <Button sx={buttonStyle} href="https://zora.co/seskamol" target="_blank" size="small" >
                https://zora.co/seskamol
            </Button>

            <Button sx={buttonStyle} href="https://www.instagram.com/seskamol/" target="_blank" size="small" >
                https://www.instagram.com/seskamol/
            </Button>

        </Box>
    );
}

export default CompLinks