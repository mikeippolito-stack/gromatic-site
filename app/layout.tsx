import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  metadataBase: new URL('https://www.gromatic.co'),
  title: {
    default: 'Gromatic — Growth on Autopilot',
    template: '%s | Gromatic'
  },
  description: 'Automation-powered growth systems for local businesses. Capture more leads, follow up automatically, and convert faster.',
  openGraph: {
    title: 'Gromatic — Growth on Autopilot',
    description: 'Automation-powered growth systems for local businesses.',
    url: 'https://www.gromatic.co',
    siteName: 'Gromatic',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gromatic — Growth on Autopilot',
    description: 'Automation-powered growth systems for local businesses.',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
