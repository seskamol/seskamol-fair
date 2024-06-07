//
import { useState } from 'react'
//
import { MainContext } from './context/MainContext'
//
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Button
} from '@mui/material';
//
import { ColorModeContext, ColorMode } from './theme/ColorModeContext'
//
import CompConnect from './components/CompConnect'
import CompInfoCard from './components/CompInfoCard'
import CompThree from './components/CompThree'
import CompLinks from './components/CompLinks'

/////////////////////////////
const aBoxStyle = {
  padding: '7px',
  width: "100vw",
  height: "100%"
}

const aBoxSx = {
  border: 1,
  borderColor: "secondary.light"
}
///////////////////////////////////////////

//const cBoxStyle = {
//  //width: '100vw',
//  //height: '100%',
//}

const cBoxSx = {
  border: 1,
  bgcolor: "background.default",
  borderColor: "secondary.light",

  display: 'grid',
  flexDirection: 'column',
  alignItems: 'space-between',

  flexGrow: 1,
  justifyContent: 'stretch',
  p: '7px',
}

function App() {

  const [opened, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const data = {
    opened, setOpen,
    anchorEl, setAnchorEl
  }

  const theme = ColorMode();

  return (
    <MainContext.Provider value={data}>
      <ColorModeContext.Provider value={theme}>
        <ThemeProvider theme={theme.theme}>
          <CssBaseline />
          <Box
            component={"div"}
            style={aBoxStyle}
            sx={aBoxSx}
          >
            <Box
              component={"div"}
              //style={cBoxStyle}
              sx={cBoxSx}
            >
              <Button onClick={theme.toggleColorMode} size="small" sx={{ border: 1, borderColor: "secondary.light", width: '100%' }}> {theme.mode == 'dark' ? 'border' : 'close'} </Button>

              <CompConnect />
              <CompThree />
              <CompInfoCard />

            </Box>
            <CompLinks />

          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </MainContext.Provider>
  )
}

export default App