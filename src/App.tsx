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
//import CompInfoCard from './components/CompInfoCard'
//import CompThree from './components/CompThree'
import CompLinks from './components/CompLinks'
import CompMenu from './components/CompMenu'

import { ConntectWalletContextProvider } from './components/FuncConnect';
import { MintTransactionContextProvider } from './components/FuncMint';

const aBoxStyle = {
  padding: '7px',
  width: "100vw",
  height: "100%"
}

const aBoxSx = {
  border: 1,
  borderColor: "secondary.light"
}

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

  const data = {
    opened, setOpen,
  }

  const theme = ColorMode();

  return (
    <MainContext.Provider value={data}>
      <ColorModeContext.Provider value={theme}>
        <ThemeProvider theme={theme.theme}>
          <ConntectWalletContextProvider>
            <MintTransactionContextProvider>
              <CssBaseline />

              <Box
                component={"div"}
                style={aBoxStyle}
                sx={aBoxSx}
              >
                <Box
                  component={"div"}
                  sx={cBoxSx}
                >
                  <Button onClick={theme.toggleColorMode} size="small" sx={{ justifyContent: "flex-end", border: 1, borderColor: "secondary.light", width: '100%' }}> {theme.mode == 'dark' ? 'border' : 'close'} </Button>
                  <CompConnect />
                  <CompMenu />
                  {/* <CompThree />
              <CompInfoCard /> */}
                </Box>
                <CompLinks />


              </Box>
            </MintTransactionContextProvider>
          </ConntectWalletContextProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </MainContext.Provider>
  )
}

export default App