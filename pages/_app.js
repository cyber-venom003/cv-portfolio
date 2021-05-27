import '../styles/globals.css';
import Layout from '../components/Layout';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito',
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
