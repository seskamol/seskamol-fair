//import * as React from 'react';

import {
    MainContext,
    useContext
} from '../context/MainContext';

import {
    Box,
    Modal,
    Button,
    Fade,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Paper
} from '@mui/material';

import { Address } from 'viem';

const cardContent = [
    "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeidzxb2sgms6flilbbabfretdv6i3trz3odfavojaeyz4xqql47y4e&amp;w=1920&amp;q=75",
    "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeichvxgbapepyhlk3ezw7yjcnwtcl6zvzxzzgx2ppbpt6snxezftqm&w=1920&q=75",
    "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifkfbrxocnmzxezynoy33yijs3qgh345ftfpzqrj4c5eycb7a3qve&w=1920&q=75"
]

const buttonSx = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    mb: 0,
    mt: 0,
    //border: 1,
    //py: 0
}

const cardPaperStyle = {
    justifyContent: 'center',
    //width: '100vw',
    //height: '50vh',
    alignItems: 'center',
    border: '2px solid #101',
    background: 'black',
}

const cardPaperSx = {
    display: 'flex',
    alignSelf: 'center',
    //width: '90vw',
    //height: '90vh',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    p: 1,
    outline: 'none',
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

const erc1155Address: Address = "0x743a00292526d31345ee933cc8e91ddf8ff3f047";
const tokenId: bigint = BigInt(1);

function InfoCard() {

    const data = useContext(MainContext);
    const handleClose = () => data?.setOpen(false);

    return (

        <Modal
            sx={mModalSx}
            style={mModalStyle}
            keepMounted
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={Boolean(data?.opened)}
            onClose={handleClose}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    timeout: 100,
                },
            }}
        >
            <Fade in={data?.opened}>
                <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>
                    <Card variant="outlined"
                        sx={{
                            bgcolor: 'rgb(0,0,0,1)',
                            p: "0.4 vw",
                            borderColor: "secondary.light",
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={cardContent[0]}
                            sx={{ height: { xs: '100%', sm: '100%', md: '67vh' } }}
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
                                pb: 4,
                                mb: 1

                            }}
                        >
                            <Button sx={buttonSx} href="https://zora.co/collect/base:0x743a00292526d31345ee933cc8e91ddf8ff3f047/1" target="_blank" size="small" >
                                [ ZORA ]
                            </Button>

                            <CompArguments erc1155Address={erc1155Address} tokenId={tokenId} />

                            <Button sx={buttonSx} onClick={handleClose} size="small" >
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