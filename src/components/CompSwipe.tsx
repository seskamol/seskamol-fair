import * as React from 'react';

import {
    Box,
    CardMedia,
    Divider,
    Slide
} from '@mui/material';

interface CardContentSliderPropsTypes {
    content: string[];
}

export default function CompCardContentSlider(props: CardContentSliderPropsTypes) {

    const { content } = props;

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = content.length - 1;
    const minSteps = 0;

    React.useEffect(() => (
        setActiveStep(0)
    ), [content])

    const handleNext = () => {
        if (activeStep < maxSteps)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        else if (activeStep < minSteps)
            setActiveStep(0);
        else
            setActiveStep(0);
    };

    return (
        <Box
            component={'div'}
            sx={{
                p: 1,
                border: 1,
                borderColor: "secondary.light",
                bgcolor: 'black',
                display: 'grid',
                direction: 'column',
                justifyContent: 'center',
            }}
        >

            <Box component={'div'} onClick={handleNext} sx={{ height: '90vh', overflow: 'hidden' }} >
                {
                    content.map((data, index) => (
                        <Slide
                            key={index}
                            unmountOnExit={true}
                            in={activeStep == index}
                            direction={index == maxSteps ? "left" : "right"}
                            timeout={100}
                        >
                            <CardMedia
                                component="img"
                                image={data}
                                sx={{ height: { xs: '100%', sm: '100%', md: '100%' } }}
                            />
                        </Slide>
                    ))
                }
            </Box>

            <Box
                component={'div'}
                sx={{
                    border: 1,
                    borderColor: "secondary.light",
                    display: 'flex',
                    mt: 1,
                    justifyContent: 'center',
                    bgcolor: "transparent"
                }}
            >
                { // @ts-ignore
                    content.map((data, index) => (
                        <Divider
                            key={index}
                            sx={{
                                border: 1,
                                px: 1,
                                py: 0.07,
                                mx: 1,
                                my: 0.5,
                                borderColor: activeStep == index ? "primary.main" : "#404040"
                            }}
                        />
                    ))
                }
            </Box>

        </Box>
    );
}