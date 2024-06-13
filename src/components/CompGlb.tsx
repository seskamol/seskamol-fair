import { useRef } from 'react'

import { useGLTF, Html } from '@react-three/drei'
//import { useFrame } from "@react-three/fiber";

import { MainContext, useContext } from '../context/MainContext';

const gltf = "https://magic.decentralized-content.com/ipfs/bafybeifqirnitmyo4r35etq2mkbrhbbxqdmioiobwzrtl6llyddsiabb7y"

function CompGlb() {

    const ref = useRef();
    // @ts-ignore
    const { nodes, materials } = useGLTF(gltf)

    // @ts-ignore
    //useFrame(() => (ref.current.rotation.y += 0.00017));

    const data = useContext(MainContext);

    const handleClick: any = () => {
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
                rotation={[(Math.PI / 2), 0, 0]}
            >
                <Html />
            </mesh>

        </group>
    );
}

useGLTF.preload(gltf)

export default CompGlb