import Body from '@/component/Layout/Body';
import './globals.css';
import localFont from 'next/font/local';
import GoogleAnalyticsTracking from '@/component/Analytics/GoogleAnalytics';
import GoogleTagManager from '@/component/Analytics/GoogleTagManager';
// Font files can be colocated inside of `app`

export const metadata = {
  robots: { index: false, follow: false },
  title: 'CreoSphera',
  description: 'Kembangkan bisnis anda dengan creosphera',
  verification: {
    google: 'Rh6bVWGaBmXAAgMmhmcD8qvcrES2la_TVg0TwogVuvs',
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
      <GoogleAnalyticsTracking
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />
      {/* <GoogleTagManager G_TAG_MANAGER_ID={process.env.NEXT_PUBLIC_GTM} /> */}
      <Body font={proximaNova}>{children}</Body>
    </html>
  );
}
