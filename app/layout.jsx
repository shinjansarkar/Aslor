import './globals.css';

export const metadata = {
  title: 'Aslor Enterprises | Authorized APN Solar Partner | West Bengal',
  description:
    'Aslor Enterprises - Authorized Franchise Partner of APN Solar. World-class rooftop solar & commercial EPC solutions across Siliguri & West Bengal. Claim PM Surya Ghar Subsidies.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.webp',
    apple: '/logo.webp',
  },
};

export default function RootLayout({ children }) {
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
        {children}
      </body>
    </html>
  );
}
