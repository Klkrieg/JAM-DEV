import CssBaseline from '@material-ui/core/CssBaseline';
import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

import { theme } from '../common/utils/theme';

import './app.scss';
import { swrConfig } from '../swrConfig';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <SWRConfig value={swrConfig}>
          <CssBaseline />
          <Component {...pageProps} />
        </SWRConfig>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  return { ...appProps };
};
