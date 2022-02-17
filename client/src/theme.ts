// @ts-ignore
import TahomaFont from './static/fonts/tahoma.ttf'
import {createTheme} from "@mui/material";

const tahoma = {
    fontFamily: 'Tahoma',
    fontStyle: 'semi-bold',
    fontDisplay: 'swap',
    fontWeight: '500',
    src: `
   local('TahomaFont'),
   local('TahomaFont-SemiBold'),
   url(${TahomaFont}) format('ttf')
 `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
    typography: {
        fontFamily: ['TahomaFont', 'Roboto'].join(',')
    }
})

export default theme;