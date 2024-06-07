//
import { MainContext, useContext } from '../context/MainContext';

import {
    //Backdrop,
    Box,
    Modal,
    Button,
    Fade,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';

const cardPNG = 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeicjbxn2hxbiunvmes7hl6jtrovrmsb7wwiyujdutwez7b7yc6sh4q&amp;w=1920&amp;q=75'

const cardBoxStyle = {

    //flexDirection: 'row',
    justifyContent: 'center',
    width: '100000vw',
    height: '10000vh',

    //position: 'relative' as 'relative',
    //top: '50%',
    //left: '50%',
    //transform: 'translate(-50%, -50%)',
    //width: 400,
    //bgcolor: 'transparent',
    //border: '0vw solid rgb(0,0,0,0)',
    //boxShadow: 100,
    //p: 4,
    alignItems: 'center',

}

const cardBoxSx = {
    display: 'flex',
    alignSelf: 'center',
    border: 1,
    borderColor: "secondary.light",
    p: 1,
    width: '1000vw',
    height: '1000vw',


}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    mb: 2
}

const mModalSx = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
}

import CompArguments from './CompArguments'

function InfoCard() {

    const data = useContext(MainContext);
    const handleClose = () => data?.setOpen(false);

    return (
        <Box
            component={"div"}
        >
            <Modal
                sx={mModalSx}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={Boolean(data?.opened)}
                onClose={handleClose}
                closeAfterTransition
                //slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 3000,
                    },
                }}
            >
                <Fade in={data?.opened}>
                    <Box component={"div"} sx={cardBoxSx} style={cardBoxStyle}>
                        <Box component={"div"} sx={cardBoxSx} style={cardBoxStyle}>
                            <Card variant="outlined" sx={{ p: 4, pr: 5, maxWidth: '100%', bgcolor: 'rgb(0,0,0,1)' }}>
                                <CardMedia
                                    component="img"
                                    width="1000vw"
                                    height="1000vh"
                                    image={cardPNG}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="rgb(255,255,255,0.5)">
                                        8902 7B2F C86A ACDB 52B1 A06F C5C0 992A
                                    </Typography>
                                    <Typography variant="subtitle2" color="rgb(255,255,255,0.6)">
                                        <br />A lowpoly object with baked texture. 4128 point, 1376 polygon.
                                        <br />size: 3.80 MB
                                        <br />file type: *.glb
                                    </Typography>
                                </CardContent>

                                <Box component={'div'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'flex',
                                        ml: 1.5,
                                    }}
                                >
                                    <Button sx={buttonStyle} href="https://zora.co/collect/base:0x743a00292526d31345ee933cc8e91ddf8ff3f047/1" target="_blank" size="small" >
                                        [ ZORA ]
                                    </Button>

                                    <CompArguments />

                                    <Button sx={buttonStyle} onClick={handleClose} size="small" >
                                        [ exit ]
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

export default InfoCard