import {
    createContext,
} from "react";

import {
    ZDK,
    ZDKNetwork,
    ZDKChain
} from "@zoralabs/zdk";

import { Address } from "viem";

const networkInfo = {
    network: ZDKNetwork.Base,
    chain: ZDKChain.BaseMainnet,
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

/////// 0x743a00292526d31345ee933cc8e91ddf8ff3f047

async function GetTokens({
    erc1155Address
}: {
    erc1155Address: Address;
}) {

    const tokensData = await fetchTokens(zdk, [erc1155Address]);

    //console.log(tokenData.tokens.nodes[0].token.content?.url?.replace("ipfs://", "https://magic.decentralized-content.com/ipfs/")) /// ///https://ipfs.io/ipfs/
    //const modelPath = tokenData.tokens.nodes[0].token.content?.url?.replace("ipfs://", "https://magic.decentralized-content.com/ipfs/");
    //console.log(tokenData)

    return (
        { tokensData }
    )
}

type TokensContextProviderProps = {
    children: React.ReactNode
}

export const TokensContext = createContext(GetTokens);

export const TokensContextProvider = ({
    children,
}: TokensContextProviderProps) => {
    return <TokensContext.Provider value={GetTokens}> {children} </TokensContext.Provider>
}

