import Script from 'next/script';

export const GoogleAnalyticTag = () => (
  // <!-- Google tag (gtag.js) -->
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${
        process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || ''
      }`}
    />
    <Script id="#">
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || ''});`}
    </Script>
  </>
);
