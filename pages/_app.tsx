/* eslint-disable @next/next/no-page-custom-font */
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
// import { NotificationsProvider } from '@mantine/notifications';
import { setCookie } from 'cookies-next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
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
      <NextSeo
        title="Crypto Insights"
        description="Welcome to Crypto Insights, the news and information hub for the cryptocurrency market. Here you will find a wide variety of articles covering the latest developments in crypto, predictions on future price movements and much more."
      />

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
