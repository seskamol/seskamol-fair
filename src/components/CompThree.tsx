//
import { Box } from "@mui/material";

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import CompGlb from "./CompGlb";

const threeBoxStyle = {
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'rgba(0,100,0,0.0)',
    height: '100%'
}

function Three() {

    return (
        <Box sx={threeBoxStyle} component={'div'} /* style={{ position: 'fixed' }} */>
            <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 6] }}>
                <OrbitControls />
                <CompGlb />
            </Canvas>
        </Box>
    );
}

export default Three