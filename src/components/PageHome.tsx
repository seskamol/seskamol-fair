import Box from '@mui/material/Box';
//import CompInfoCard from './CompInfoCard'
//import CompThree from './CompThree'

const mBoxSx = {
    display: 'grid',
    border: 1,
    borderColor: "secondary.light",
    p: '0.2vw'
}

export default function PageHome() {
    return (
        <Box component={'div'}
            sx={mBoxSx}
        >
            {/* <CompThree /> */}
            {/* <CompInfoCard /> */}
        </Box>
    );
}