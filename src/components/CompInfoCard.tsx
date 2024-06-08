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
    Skeleton,
    Paper
} from '@mui/material';

const cardPNG = "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeidzxb2sgms6flilbbabfretdv6i3trz3odfavojaeyz4xqql47y4e&amp;w=1920&amp;q=75"

const cardBoxStyle = {
    justifyContent: 'center',
    width: '100000vw',
    height: '50vh',
    alignItems: 'center',
    border: '2px solid #111',
    background: 'black',
}

const cardBoxSx = {
    display: 'flex',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    p: 1,
    outline: 'none',
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
    alignSelf: 'center',
}

const mModalStyle = {
    outline: 'none',
    bgcolor: 'background.paper',
}

import CompArguments from './CompArguments'

function InfoCard() {

    const data = useContext(MainContext);
    const handleClose = () => data?.setOpen(false);

    return (

        <Modal
            sx={mModalSx}
            style={mModalStyle}
            //keepMounted
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={Boolean(data?.opened)}
            onClose={handleClose}
            closeAfterTransition
            //slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 100,
                },
            }}
        >
            <Fade in={data?.opened}>
                <Paper component={"div"} sx={cardBoxSx} style={cardBoxStyle}>
                    <Card variant="outlined"
                        sx={{
                            p: 4,
                            pr: 5,
                            maxWidth: '100%',
                            bgcolor: 'rgb(0,0,0,1)',
                            minHeight: '1000px',

                        }}
                    >

                        {
                            cardPNG ? (
                                <CardMedia
                                    component="img"
                                    width="900vw"
                                    height="1500vh"
                                    image={cardPNG}
                                />
                            ) : (
                                <Skeleton
                                    variant="rectangular"
                                    width="900vw"
                                    height="1000vh"
                                    sx={{ bgcolor: 'black' }}
                                />
                            )
                        }

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
                </Paper>
            </Fade>
        </Modal>

    );
}

export default InfoCard