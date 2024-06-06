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
//import CompThree from './components/CompThree'
import CompLinks from './components/CompLinks'

const appBoxStyle = {
  border: 1,
  bgcolor: "background.default",
  borderColor: "secondary.light",
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  p: 2,
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
            sx={appBoxStyle}
            component={"div"}
            style={{ width: "100vw", height: "100vh" }}
          >
            <Button onClick={theme.toggleColorMode} size="small" sx={{ mt: 0.5 }}> {theme.mode} </Button>

            <CompConnect />
            {/* <CompThree /> */}
            <CompInfoCard />
            <CompLinks />

          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </MainContext.Provider>
  )
}

export default App
