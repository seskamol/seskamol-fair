import * as React from 'react'
import { useEffect, useMemo, useState } from "react";

import { config } from '../wagmi';

import {
    Address,
} from "viem";

import {
    //type BaseError,
    useWaitForTransactionReceipt,
    useWriteContract,
    useAccount,
    usePublicClient,
    useSimulateContract,
} from 'wagmi'

import { SimulateContractParameters } from 'wagmi/actions';

import {
    createMintClient,
} from "@zoralabs/protocol-sdk";

const useMintClient = () => {

    const publicClient = usePublicClient({ config })

    console.log("publicClient : ", publicClient);

    const { chain } = useAccount();

    console.log("chain : ", chain);

    const mintClient = useMemo(
        () => chain && createMintClient({ chain }),
        [chain, publicClient],
    );

    return mintClient;
};

////////////////////////////////////////////////////////

export function MintNFT({
    quantity,
    comment,
}: {
    quantity: number;
    comment?: string;
}) {

    const { address } = useAccount();

    const mintClient = useMintClient();

    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()

    const erc1155Address: Address = "0x43ca10c87627cd4dc831b270f7cb986dbe3bcfe2";
    const recipent: Address = address!;
    const tokenId: bigint = BigInt(2);
    //const quantity: number = 1;
    //const comment: string = "wagmitestcommentglb";
    const mintReferral: Address = "0x99e63EA86766ed7526B994AAb727FE5cf0178D40";

    const [params, setParams] = useState<SimulateContractParameters>();

    useEffect(() => {
        if (!mintClient || !address) return;

        const makeParams = async () => {
            const params = await mintClient.makePrepareMintTokenParams({
                tokenId: tokenId,
                minterAccount: recipent,
                tokenAddress: erc1155Address,
                mintArguments: {
                    mintToAddress: recipent,
                    quantityToMint: quantity,
                    mintReferral,
                    saleType: "fixedPrice",
                    mintComment: comment,
                },
            });
            setParams(params);
        };
        makeParams();
    }, [mintClient, recipent, quantity, comment]);

    // @ts-ignore
    const { data } = useSimulateContract(params);

    console.log("params>>>>>>>>>: ", params);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        writeContract(data!.request);

        console.log("data>>>>>>>>>: ", data);
        console.log("data!.request>>>>>>>>>: ", data!.request);

    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    return (
        { isPending, isConfirming, isConfirmed, error, submit }
        //        <Box sx={boxStyle} component={'div'}>
        //
        //            <form onSubmit={submit}>
        //                <button
        //                    disabled={isPending}
        //                    type="submit"
        //                >
        //                    {isPending ? 'Confirming...' : 'Mint'}
        //                </button>
        //                {hash && <div>Transaction Hash: {hash}</div>}
        //                {isConfirming && <div>Waiting for confirmation...</div>}
        //                {isConfirmed && <div>Transaction confirmed.</div>}
        //                {error && (
        //                    <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        //                )}
        //                <br />---
        //                {error && (
        //                    <div>Error: {(error as BaseError).details || error.message}</div>
        //                )}
        //                <br />---
        //                {error && (
        //                    <div>Error: {(error as BaseError).docsPath || error.message}</div>
        //                )}
        //                <br />---
        //                {error && (
        //                    <div>Error: {(error as BaseError).stack || error.message}</div>
        //                )}
        //            </form>
        //
        //        </Box>
    )
}
