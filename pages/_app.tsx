/* eslint-disable @next/next/no-page-custom-font */
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
// import { NotificationsProvider } from '@mantine/notifications';
import { setCookie } from 'cookies-next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Crypto Insights</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Noto+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              brand: [
                '#fff2de',
                '#fddcb2',
                '#fac585',
                '#f6ad55',
                '#f39627',
                '#da7c0f',
                '#aa6109',
                '#794504',
                '#4a2800',
                '#1d0d00',
              ],
            },
            fontFamily: 'Poppins, sans-serif',
            fontSizes: {
              xs: 12,
              sm: 14,
              md: 16,
              lg: 18,
              xl: 20,
            },
            primaryColor: 'brand',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return {
//     ...appProps,
//     colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
//   };
// };
