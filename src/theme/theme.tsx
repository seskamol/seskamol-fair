import { PaletteMode } from "@mui/material";
import { orange } from '@mui/material/colors';

export const theme = {
    palette: {
        primary: orange
    },
};

export const tokens = (mode: PaletteMode) => ({
    ...(mode === 'dark'
        ? {
            primary: {
                100: "#ffedcc",
                200: "#ffdb99",
                300: "#ffc966",
                400: "#ffb733",
                500: "#ffa500",
                600: "#cc8400",
                700: "#996300",
                800: "#664200",
                900: "#332100"
            },
            secondary: {
                100: '#000000',
                200: "#0a0a0a",
                300: "#141414",
                400: "#1e1e1e",
                500: "#282828",
                600: "#323232",
                700: "#3b3b3b",
                800: "#454545",
                900: "#4f4f4f"
            },
        } : {
            primary: {
                100: "#332100",
                200: "#664200",
                300: "#996300",
                400: "#cc8400",
                500: "#ffa500",
                600: "#ffb733",
                700: "#ffc966",
                800: "#ffdb99",
                900: "#ffedcc"
            },
            secondary: {
                100: '#4f4f4f',
                200: "#454545",
                300: "#3b3b3b",
                400: "#323232",
                500: "#282828",
                600: "#1e1e1e",
                700: "#141414",
                800: "#0a0a0a",
                900: "#000000"
            },
        })
});

export const themeSettings = (mode: PaletteMode) => {
    //const colors = tokens(mode);
    const letterSpacingM = "0.1333vw"; // letterSpacing
    const fontFamilyM = "Arial"; //fontFamily

    return {

        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: 'rgba(255,150,0,1.00)',
                        light: 'rgba(255,0,0,1.0)',
                        dark: 'rgba(255,255,255,0.10)',
                        contrastText: 'rgba(255,100,0,1.00)',
                    },
                    secondary: {
                        main: 'rgba(255,255,255,1.0)',
                        light: 'rgba(255,255,255,0.1)',
                        dark: 'rgba(0,0,0,0.0)',
                        contrastText: 'rgba(255,255,255,0.79)',
                    },
                    text: {
                        primary: 'rgba(234,234,234,0.98)',
                        secondary: 'rgba(208,208,208,0.81)',
                        disabled: 'rgba(255,255,255,0.65)',
                        hint: 'rgba(255,100,0,0.9)',
                    },
                    background: {
                        default: 'rgba(0,0,0,1.0)',
                        paper: 'rgba(0,0,0,1.0)',
                    },
                    divider: 'rgba(255,255,255,0.09)',
                    info: {
                        main: 'rgba(255,255,255,0.09)',
                        light: '#323232',
                        dark: '#1a0606',
                    },
                } : {
                    primary: {
                        main: 'rgba(0,255,255,1.00)',
                        light: 'rgba(255,255,255,1.00)',
                        dark: 'rgba(144,0,2,0.92)',
                        contrastText: 'rgba(255,255,255,0.98)',
                    },
                    secondary: {
                        main: 'rgba(255,255,255,0.3)',
                        light: 'rgba(255,255,255,0.9)',
                        dark: 'rgba(133,0,47,0.95)',
                        contrastText: 'rgba(255,255,255,0.79)',
                    },
                    text: {
                        primary: 'rgba(200,200,200,1.0)',
                        secondary: 'rgba(200,200,200,0.5)',
                        disabled: 'rgba(255,255,255,0.9)',
                        hint: 'rgba(255,100,0,0.9)',
                    },
                    background: {
                        default: 'rgba(0,0,0,0.5)',
                        paper: 'rgba(255,150,0,0.01)',
                    },
                    divider: 'rgba(255,255,255,0.1)',
                    info: {
                        main: '#141414',
                        light: '#323232',
                        dark: '#1a0606',
                    },
                }),
        },

        props: {
            MuiAppBar: {
                color: 'transparent', //color: 'default',
            },
        },

        shape: {
            borderRadius: 0
        },

        /*         components: {
                    MuiCssBaseline: {
                      styleOverrides: `
                        @font-face {
                          font-family: 'Gulim';
                          font-style: normal;
                          font-display: swap;
                          font-weight: 400;
                          src: local('Gulim'), local('Gulim-Regular'), url(${GulimWoff2}) format('woff2');
                          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                        }
                      `,
                    },
                  }, */

        typography: {

            htmlFontSize: 15,
            fontSize: 8,
            fontFamily: fontFamilyM,


            h1: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            h2: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            h3: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            h4: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            h5: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            h6: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            subtitle1: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            subtitle2: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            body1: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            body2: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            button: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            caption: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
            overline: {
                letterSpacing: letterSpacingM,
                fontFamily: fontFamilyM,
            },
        }
    }
}



