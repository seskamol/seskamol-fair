//
import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";
//
const networkInfo = {
    network: ZDKNetwork.Base,
    chain: ZDKChain.BaseMainnet,
}
//
const API_ENDPOINT = "https://api.zora.co/graphql";
//
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
const tokenData = await fetchTokens(zdk, ['0x743a00292526d31345ee933cc8e91ddf8ff3f047']);

export function getTokens() {

    //console.log(data)
    //console.log(data.tokens.nodes[0].token.content?.url?.replace("ipfs://", "https://magic.decentralized-content.com/ipfs/")) /// ///https://ipfs.io/ipfs/
    //const modelPath = data.tokens.nodes[0].token.content?.url?.replace("ipfs://", "https://magic.decentralized-content.com/ipfs/");

    return (
        { tokenData }
    )
}