import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.aslorenterprises.com'), // Assuming default URL
  title: 'Aslor Enterprises | Premier Solar Partner | West Bengal',
  description:
    'Aslor Enterprises - Premier Solar Energy Partner. World-class rooftop solar & commercial EPC solutions across Siliguri & West Bengal. Claim PM Surya Ghar Subsidies.',
  keywords: ['Solar Panels', 'Solar Energy', 'Aslor Enterprises', 'Siliguri', 'West Bengal', 'Rooftop Solar', 'PM Surya Ghar', 'Commercial Solar', 'EPC'],
  authors: [{ name: 'Aslor Enterprises' }],
  creator: 'Aslor Enterprises',
  publisher: 'Aslor Enterprises',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aslor Enterprises | Premier Solar Partner | West Bengal',
    description: 'Aslor Enterprises - Premier Solar Energy Partner. World-class rooftop solar & commercial EPC solutions across Siliguri & West Bengal.',
    url: 'https://www.aslorenterprises.com',
    siteName: 'Aslor Enterprises',
    images: [
      {
        url: '/logo.webp', // Assuming there's a logo or hero image
        width: 800,
        height: 600,
        alt: 'Aslor Enterprises Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aslor Enterprises | Premier Solar Partner',
    description: 'World-class rooftop solar & commercial EPC solutions across Siliguri & West Bengal.',
    images: ['/logo.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.webp',
    apple: '/logo.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aslor Enterprises',
    description: 'Aslor Enterprises - Premier Solar Energy Partner. World-class rooftop solar & commercial EPC solutions across Siliguri & West Bengal.',
    url: 'https://www.aslorenterprises.com',
    logo: 'https://www.aslorenterprises.com/logo.webp',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    areaServed: ['Siliguri', 'West Bengal'],
    priceRange: '₹₹',
    industry: 'Solar Energy',
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070a08] text-neutral-100 antialiased selection:bg-lime-400 selection:text-black font-sans min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
