import {
    MainContext,
    useContext
} from '../context/MainContext';


import {
    //Backdrop,
    //Box,
    Modal,
    Button,
    Fade,
    Paper,
    Box,
    Divider
} from '@mui/material';

import { ConntectWalletContext } from './FuncConnect'


//const buttonStyle = {
//    display: 'flex',
//    justifyContent: 'start',
//    width: '100%',
//    mb: 2
//}

const cBoxStyle = {
    border: 1,
    bgcolor: "background.default",
    borderColor: "secondary.light",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    mb: 1,
    mt: 0,
    p: 0.5,
}

const cardPaperStyle = {
    justifyContent: 'center',
    //width: '100vw',
    //height: '50vh',
    alignItems: 'center',
    border: '2px solid #101',
    background: 'black',

}

const cardPaperSx = {
    display: 'flex',
    alignSelf: 'center',
    //width: '90vw',
    //height: '90vh',
    border: 1,
    borderColor: "secondary.light",
    bgcolor: 'black',
    p: 1,
    pt: 3,
    pb: 3,
    outline: 'none',
}

const mModalSx = {
    /*  zIndex: '1px', */
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
}

const mModalStyle = {
    outline: 'none',
    bgcolor: 'background.paper',
}

function ModalConnect() {

    const data = useContext(MainContext);

    const FuncConnect = useContext(ConntectWalletContext)
    const { connectors, connect } = FuncConnect()

    return (

        <Modal
            sx={mModalSx}
            style={mModalStyle}
            //keepMounted
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={Boolean(data?.openedModalConnect)}
            onClose={() => data?.setOpenModalConnect(false)}
            closeAfterTransition
            //slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 300,
                },
            }}
        >
            <Fade in={data?.openedModalConnect}>
                <Paper component={"div"} sx={cardPaperSx} style={cardPaperStyle}>


                    <Box sx={cBoxStyle} component={'div'}>
                        {connectors.map((connector) => (
                            <Button
                                size="small"
                                key={connector.uid}
                                onClick={() => connect({ connector })}
                                type="button"
                                variant="outlined"
                                sx={{ pl: 1.6, mb: 0.5, mt: 0.5 }}
                            >
                                {connector.name}
                            </Button>
                        ))}

                        <Divider sx={{ border: 1, borderColor: "secondary.light", pb: 0.5, pt: 0.5 }} />

                        <Button
                            size="small"

                            onClick={() => data?.setOpenModalConnect(false)}
                            type="button"
                            variant="outlined"
                            sx={{ pl: 1.6, mb: 0.5, mt: 0.5 }}
                        >
                            EXIT
                        </Button>


                    </Box>





                </Paper>
            </Fade>
        </Modal>

    );
}

export default ModalConnect