//import * as React from 'react';

import {
    useContext
} from '../context/MainContext';

import { Address } from 'viem';

import { TokensContext } from './FuncTokens'
import { useQuery } from '@tanstack/react-query';

import {
    //Backdrop,
    CircularProgress,
    Divider,
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Paper
} from '@mui/material';

import CompArguments from './CompArguments'

const buttonStyle = {
    display: 'flex',
    justifyContent: 'start',
    width: '100%',
    mb: 2
}

const cardPaperStyle = {
    justifyContent: 'center',
    //width: '100vw',
    //height: '50vh',
    alignItems: 'center',
    //border: '2px solid #101',
    background: 'black',
}

const cardPaperSx = {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignSelf: 'center',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    p: '0.2vw',
    outline: 'none',
}

function InfoCard() {

    const erc1155Address: Address = "0x3c8fec282501827b560f95d848536f211fbdd7ec";

    const GetTokens = useContext(TokensContext);
    const tokensData = GetTokens({ erc1155Address });

    const fetchData = useQuery({
        queryKey: [''],
        queryFn: async () =>
            tokensData.then(data => data)
    })

    const { data, isLoading } = fetchData

    if (isLoading) {
        return (
            <Box component={'div'}>
                <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>
                    <CircularProgress sx={{ my: 10 }} />
                </Paper>
            </Box>
        )
    }

    //console.log("data: ", data?.tokensData.tokens.nodes)

    return (
        <Box component={'div'}>
            <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>
                {
                    data?.tokensData.tokens.nodes.map((data, index) => (
                        <Box component={'div'} key={index} >
                            <Card variant="outlined"
                                sx={{
                                    bgcolor: 'rgb(0,0,0,1)',
                                    p: '0.2vw',
                                    my: '0.0vw',
                                    borderColor: "secondary.light",
                                }}
                            >
                                <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>
                                    <CardMedia
                                        key={index}
                                        component="video"
                                        style={{ backgroundImage: 'none' }}
                                        //onMouseOver={ }
                                        //onMouseOut={handleToggle}
                                        disablePictureInPicture
                                        disableRemotePlayback={true}
                                        controlsList="nodownload noplaybackrate"
                                        aria-disabled
                                        controls={true}

                                        loop
                                        poster={String(data.token.image?.url).replace("ipfs://", "https://magic.decentralized-content.com/ipfs/")}
                                        image={String(data.token.content?.url).replace("ipfs://", "https://magic.decentralized-content.com/ipfs/")}
                                        sx={{
                                            height: { xs: '100%', sm: '100%', xl: '67vh' },
                                            width: { xs: '100%', sm: '100%', xl: '67vh' },

                                        }}
                                    />
                                </Paper>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="rgb(255,255,255,0.5)">
                                        {data.token.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="rgb(255,255,255,0.6)">
                                        <br />
                                        Collection Address: {data.token.collectionAddress}
                                        <br />
                                        Token ID: {data.token.tokenId}
                                        <br />
                                        Chain: {data.token.tokenContract?.network}
                                        <br />
                                        File Type: {data.token.content?.mimeType}
                                        {/* <br />
                                        {data.token.mintInfo?.price?.nativePrice.currency.name} */}
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
                                    <Button
                                        sx={buttonStyle}
                                        href={
                                            "https://zora.co/collect/" +
                                            String(data.token.tokenContract?.network).toLowerCase() +
                                            ":" +
                                            String(data.token.collectionAddress) +
                                            "/" +
                                            String(data.token.tokenId)
                                        }
                                        target="_blank"
                                        size="small"
                                    >
                                        [ ZORA ]
                                    </Button>

                                    <CompArguments erc1155Address={erc1155Address} tokenId={BigInt(data.token.tokenId)} />

                                </Box>
                            </Card>

                            <Divider sx={{ my: 3, border: 1, borderColor: "primary.main" }} />
                        </Box>
                    ))
                }
            </Paper>
        </Box>

    );
}

export default InfoCard