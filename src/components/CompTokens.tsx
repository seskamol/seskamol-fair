import {
    Box,
} from '@mui/material';

import {
    boxStyle,
} from '../theme/Sx'

import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";

const networkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Sepolia,
}

const API_ENDPOINT = "https://api.zora.co/graphql";

const args = {
    endPoint: API_ENDPOINT,
    networks: [networkInfo],
}

const zdk = new ZDK(args);

async function fetchTokens(zdk: ZDK, collectionAddresses: string[]) {
    return await zdk.tokens({
        where: {
            collectionAddresses
        }
    });
}

// @ts-ignore
const data = await fetchTokens(zdk, ['0x5061bfd189f4e67a53d5af3656f20791cdeaf574']);

function CompTokens() {

    return (
        <Box sx={boxStyle} component={'div'}>
            <Box sx={boxStyle} component={'div'}>
            </Box>
        </Box >
    );
}

export default CompTokens;
