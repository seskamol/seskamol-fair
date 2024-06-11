import {
    Box,
    Button,
} from '@mui/material';

const lBoxStyle = {
    width: '100%',
}

const lBoxSx = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    //width: '100%',
    border: 1,
    bgcolor: 'transparent',
    borderColor: "secondary.light",
    p: 1,
    mt: 1,
}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'start',
    //width: '100%'
}

function CompLinks() {
    return (
        <Box
            border={1}
            component={"div"}
            style={lBoxStyle}
            sx={lBoxSx}
        >
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