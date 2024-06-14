//import * as React from 'react';

import {
    useContext
} from '../context/MainContext';

import {
    CircularProgress,
    Divider
} from '@mui/material';

import { Address } from 'viem';

import { TokensContext } from './FuncTokens'
import { useQuery } from '@tanstack/react-query';

import {
    //Backdrop,
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Paper
} from '@mui/material';

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
    flexDirection: 'column',
    alignSelf: 'center',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    p: 1,
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
                                    p: 1,
                                    my: 1
                                }}
                            >
                                <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>
                                    <CardMedia
                                        component="img"
                                        image={String(data.token.image?.url).replace("ipfs://", "https://magic.decentralized-content.com/ipfs/")}
                                        sx={{
                                            height: { xs: '100%', sm: '100%', md: '67vh' },
                                            width: { xs: '100%', sm: '100%', md: '67vh' }
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
                                    <Button sx={buttonStyle} href="https://zora.co/collect/base:0x3c8fec282501827b560f95d848536f211fbdd7ec" target="_blank" size="small" >
                                        [ ZORA ]
                                    </Button>

                                    <Button disabled sx={buttonStyle} href="" target="_blank" size="small" >
                                        [ MINT ]
                                    </Button>

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