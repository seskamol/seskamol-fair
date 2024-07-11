import {
    Box,
    Button,
} from '@mui/material';

const lBoxStyle = {
    width: '100%',
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
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'center',
                border: 1,
                bgcolor: 'transparent',
                borderColor: "secondary.light",
                p: '0.2vw',
            }}
        >
            <Box
                border={1}
                component={"div"}
                style={lBoxStyle}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    border: 1,
                    bgcolor: 'transparent',
                    borderColor: "secondary.light",
                    p: '0.4vw',
                }}

            >
                <Button sx={buttonStyle} href="https://soundcloud.com/seskamol" target="_blank" size="small" >
                    https://soundcloud.com/seskamol
                </Button>

                <Button sx={buttonStyle} href="https://instagram.com/seskamol/" target="_blank" size="small" >
                    https://instagram.com/seskamol
                </Button>

                <Button sx={buttonStyle} href="https://zora.co/seskamol" target="_blank" size="small" >
                    https://zora.co/seskamol
                </Button>
            </Box>
        </Box >
    );
}

export default CompLinks