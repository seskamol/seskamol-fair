import * as React from 'react';

import {
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Paper,
    Divider,
    Modal,
    Fade
} from '@mui/material';

import Masonry from '@mui/lab/Masonry';

import CompSwipe from './CompSwipe'

import content from '../content/sculpture.json'

const buttonStyle = {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
    mb: 2,
    mt: 3,
    alignSelf: 'flex-end'
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

const cardPaperStyle = {
    justifyContent: 'center',
    //width: '100%',
    //height: '100%',
    alignItems: 'center',
    //border: '2px solid #101',
    background: 'black',
}

const cardPaperSx = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    p: 1,
    outline: 'none',
}

const SwipeBoxSx = {
    display: 'flex',
    border: 1,
    borderColor: "secondary.light",
    m: 4,
    p: '0.4vw',
    maxWidth: '100%',
    height: '100%',
};

function BasicModal(props: any) {

    return (
        <div>
            <Modal
                sx={mModalSx}
                style={mModalStyle}
                keepMounted
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={Boolean(props.open)}
                onClose={props.close}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 100,
                    },
                }}
            >
                <Fade in={props.open}>
                    <Paper
                        component={"div"}
                        sx={cardPaperSx}
                        style={cardPaperStyle}
                    >
                        <Box
                            component={'div'}
                            sx={SwipeBoxSx}
                        >

                            <CompSwipe
                                content={content.sculpture[props.modalkey].subimg}
                            />

                            <Box
                                component={'div'}
                                sx={{
                                    minHeight: 170,
                                    height: 50,
                                    mt: 1,
                                    p: 2,
                                    py: 4,
                                    pl: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'top',
                                }}
                            >
                                <Typography gutterBottom variant="subtitle1" component="div" color="rgb(255,255,255,0.5)">
                                    {content.sculpture[props.modalkey].name}
                                </Typography>
                                <br /><br />
                                <Typography variant="caption" color="text.secondary">
                                    {
                                        String(content.sculpture[props.modalkey].desc).split('<br/>').map((str, index) =>
                                        (
                                            <Typography key={index} variant="subtitle2" >
                                                {str}
                                            </Typography>
                                        ))
                                    }
                                </Typography>
                                <br />
                                <Button
                                    size="small"
                                    /* variant="outlined" */
                                    sx={buttonStyle}
                                    onClick={props.close}
                                >
                                    [ exit ]
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}

function CompSculpture() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const [modalKey, setModalKey] = React.useState(0);

    const handleClick = (index: number) => {
        setModalKey(index);
        setOpen(true);
    };

    return (
        <Box
            component={'div'}
            sx={{
                border: 1,
                borderColor: "secondary.light",
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }} sx={{ mx: '0.4vw' }}>
                {
                    content.sculpture.map((data, index) => (
                        <Box
                            component={'div'}
                            key={index}
                        >
                            <Card
                                variant="outlined"
                                sx={{
                                    bgcolor: 'rgb(0,0,0,1)',
                                    borderColor: "secondary.light",
                                    p: '0.2vw',
                                    my: '0.2vw'
                                }}
                            >
                                <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>
                                    <CardMedia
                                        key={index}
                                        onClick={() => handleClick(index)}
                                        component="img"
                                        image={String(data.img)}
                                        sx={{ minWidth: { xs: '100%', sm: '100%', md: '100%' } }}
                                    />
                                </Paper>
                                <CardContent>
                                    <Typography sx={{ pt: '0.4vw' }} gutterBottom variant="subtitle1" component="div" color="rgb(255,255,255,0.5)">
                                        {data.name}
                                    </Typography>
                                    <br />
                                    {
                                        String(data.desc).split('<br/>').map((str, i) =>
                                        (
                                            <Typography key={i} variant="subtitle2" color="text.secondary">
                                                {str}
                                            </Typography>
                                        ))
                                    }
                                    <br />
                                </CardContent>
                                <Box
                                    component={'div'}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'flex',
                                        ml: 1.5,
                                    }}
                                >
                                </Box>
                            </Card>
                            <Divider sx={{ my: 3, border: 1, borderColor: "primary.main" }} />
                        </Box>
                    ))
                }
            </Masonry>

            <BasicModal
                open={open}
                close={handleClose}
                modalkey={modalKey}
            />
        </Box>
    );
}

export default CompSculpture