import {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    Address,
} from "viem";

import {
    useWaitForTransactionReceipt,
    useWriteContract,
    useAccount,
    usePublicClient,
    useSimulateContract,
} from 'wagmi'

import { SimulateContractParameters } from 'wagmi/actions';
import { createMintClient } from "@zoralabs/protocol-sdk";

import { config } from "../wagmi";

const useMintClient = () => {

    const publicClient = usePublicClient({ config })
    const { chain } = useAccount();

    const mintClient = useMemo(
        () => chain && createMintClient({ chain }),
        [chain, publicClient],
    );
    return mintClient;
};

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

    //console.log("quantity : ", quantity)

    const erc1155Address: Address = "0x743a00292526d31345ee933cc8e91ddf8ff3f047";
    const recipent: Address = address!;
    const tokenId: bigint = BigInt(1);
    //const quantity: number = 1;
    //const comment: string = "wagmitestcomment";
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
                    quantityToMint: Number(quantity),
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

    //console.log("data.check: ", data)

    async function mint() { writeContract(data!.request) }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

    return (
        { isPending, isConfirming, isConfirmed, error, mint, data }
    )
}
