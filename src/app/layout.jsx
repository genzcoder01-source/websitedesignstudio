import './globals.css';

export const metadata = {
  title: 'Crency: Web Design Company for Websites That Sell',
  description:
    'Crency is a web design and website development agency. New websites and redesigns that sell: strategy, design, build and launch in three weeks, from $1,000.',
  metadataBase: new URL('https://crency.agency'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crency: Web Design Company for Websites That Sell',
    description:
      'Crency is a web design and website development agency. New websites and redesigns that sell: strategy, design, build and launch in three weeks, from $1,000.',
    url: 'https://crency.agency',
    siteName: 'Crency',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/wf/logo-crn.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="is-ready dock-ready" style={{ backgroundColor: '#150734' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <link
          rel="preload"
          href="/fonts/Thunder-VF-s1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSans-VF-s1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NauryzRedKeds-s1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  );
}
