//
import { MainContext, useContext } from '../context/MainContext';
//
import {
    Box,
    Popper,
    Button,
    Fade,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
//
import cardPNG from '../assets/bakeCard.1.png'

const cardBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    border: 1,
    borderColor: "secondary.light",
    p: 2,
}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    mb: 2
}

import CompArguments from './CompArguments'

function InfoCard() {

    const data = useContext(MainContext);

    const canBeOpen = data?.opened && Boolean(data.anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <Box component={"div"}>
            <Popper
                sx={{
                    display: 'flex',
                    ml: '3%',
                    mt: '3%',
                    border: 0,
                    p: 2,
                    borderColor: "secondary.light",
                }}
                id={id}
                open={Boolean(data?.opened)}
                anchorEl={data?.anchorEl}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={650}>
                        <Box component={"div"} sx={cardBoxStyle}>
                            <Box component={"div"} sx={cardBoxStyle}>
                                <Card variant="outlined" sx={{ p: 4, pr: 5, maxWidth: '100%', bgcolor: 'rgb(0,0,0,0.95)' }}>

                                    <CardMedia
                                        component="img"
                                        width="1000vw"
                                        height="1000vh"
                                        image={cardPNG}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="rgb(255,255,255,0.5)">
                                            T:00:Z
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

                                        <Button sx={buttonStyle} onClick={() => { data?.setOpen((previousOpen: any) => !previousOpen) }} size="small" >
                                            [ exit ]
                                        </Button>


                                    </Box>

                                </Card>
                            </Box>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
}

export default InfoCard