//
import { Suspense } from "react";
import { Box } from "@mui/material";

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import CompGlb from "./CompGlb";

const tBoxStyle = {
    width: '100%',
    height: '75vh',
}

const tBoxSx = {
    display: 'grid',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'rgba(0,100,0,0.0)',
}

function Three() {

    return (
        <Box
            component={'div'}
            style={tBoxStyle}
            sx={tBoxSx}
        >
            <Suspense fallback={null}>
                <Canvas
                    //style={{ width: '100%', height: '100%' }}
                    //resize={{ debounce: { scroll: 100, resize: 1 } }}
                    camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 6] }}
                >
                    <OrbitControls />
                    <CompGlb />
                </Canvas>
            </Suspense>
        </Box>
    );
}

export default Three