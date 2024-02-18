import Body from '@/component/Layout/Body';
import './globals.css';
import localFont from 'next/font/local';
import GoogleAnalyticsTracking from '@/component/Analytics/GoogleAnalytics';
import GoogleTagManager from '@/component/Analytics/GoogleTagManager';
// Font files can be colocated inside of `app`

export const metadata = {
  description: 'Kembangkan bisnis anda dengan creosphera',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: 'Creosphera',
    template: '%s | Creosphera',
  },
  verification: {
    google: 'Rh6bVWGaBmXAAgMmhmcD8qvcrES2la_TVg0TwogVuvs',
  },
  applicationName: 'Creosphera Website',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'jasa website',
    'jasa digital marketing',
    'jasa website jakarta',
    'jasa website murah',
    'jasa digital marketing jakarta',
    'jasa bikin website',
    'jasa wordpress',
    'jasa google ads',
  ],
  alternates: {
    canonical: 'https://creosphera.com',
    languages: {
      'id-ID': '/id-ID',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: {
      default: 'Creosphera',
      template: '%s | Creosphera',
    },
    description: 'Kembangkan bisnis anda dengan creosphera',
    url: 'https://creosphera.com',
    siteName: 'Creosphera',
    images: '/images/logo/creosphera.png',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/logo/creosphera.png',
    apple: '/images/logo/creosphera.png',
  },
};
const proximaNova = localFont({
  src: [
    {
      path: 'fonts/proximanova-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/proximanova-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/proximanova-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/proximanova-semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleTagManager G_TAG_MANAGER_ID={process.env.NEXT_PUBLIC_GTM} />
      <GoogleAnalyticsTracking
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />

      <Body font={proximaNova}>{children}</Body>
    </html>
  );
}
