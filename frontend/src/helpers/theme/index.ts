import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#253341' },
    secondary: { main: '#3AAFA9' },
    background: { default: '#17252A' },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: { fontSize: '64px', fontWeight: 900 },
    subtitle1: { fontWeight: 'bold' },
  },
})
