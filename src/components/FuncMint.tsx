import {
    createContext,
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

function FuncMint({
    erc1155Address,
    tokenId,
    quantity,
    comment,
}: {
    erc1155Address: Address;
    tokenId: bigint;
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

    const recipent: Address = address!;
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

type MintTransactionContextProviderProps = {
    children: React.ReactNode
}

export const MintTransactionContext = createContext(FuncMint);

export const MintTransactionContextProvider = ({
    children,
}: MintTransactionContextProviderProps) => {
    return <MintTransactionContext.Provider value={FuncMint}> {children} </MintTransactionContext.Provider>
}

