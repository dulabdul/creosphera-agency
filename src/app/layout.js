import './globals.css';
import localFont from 'next/font/local';
import Header from '@/component/Layout/Header';
import Footer from '@/component/Layout/Footer';
// Font files can be colocated inside of `app`
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

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={proximaNova.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}