import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components';

import { theme } from '../common/utils/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Enable SSR for Material UI and Styled Components by injecting the stylesheets when a page is rendered
// https://github.com/manakuro/nextjs-styled-component-material-ui-example/blob/master/pages/_document.js
Document.getInitialProps = async (ctx) => {
  const styledSheet = new StyledServerStyleSheet();
  const muiSheets = new MuiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledSheet.collectStyles(muiSheets.collect(<App {...props} />)),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {muiSheets.getStyleElement()}
          {styledSheet.getStyleElement()}
        </React.Fragment>,
      ],
    };
  } finally {
    styledSheet.seal();
  }
};
