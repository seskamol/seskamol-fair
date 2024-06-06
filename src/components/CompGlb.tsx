//
import { useRef } from 'react'
//
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from '@react-three/drei'
//
import { MainContext, useContext } from '../context/MainContext';

import { getTokens } from './FuncTokens.ts';

function CompGlb() {

    const ref = useRef();

    const { tokenData } = getTokens();
    // @ts-ignore
    const { nodes, materials } = useGLTF(tokenData.tokens.nodes[0].token.content?.url?.replace("ipfs://", "https://magic.decentralized-content.com/ipfs/"))

    //ipfs://bafybeifqirnitmyo4r35etq2mkbrhbbxqdmioiobwzrtl6llyddsiabb7y

    // @ts-ignore
    useFrame(() => (ref.current.rotation.y += 0.0003));

    const data = useContext(MainContext);

    const handleClick: any = (event: React.MouseEvent<HTMLElement>) => {
        data?.setAnchorEl(event.currentTarget);
        data?.setOpen((previousOpen: any) => !previousOpen);
    };

    return (
        // @ts-ignore
        <group ref={ref} dispose={null}>
            <mesh
                onClick={handleClick}
                // @ts-ignore
                geometry={nodes.fbxNode_fbxMesh.geometry}
                material={materials.defaultMat}
                rotation={[(Math.PI / 2), 0, 0.6]}
            >
                <Html>
                </Html>
            </mesh>

        </group>
    );
}

//useGLTF.preload(glb)

export default CompGlb