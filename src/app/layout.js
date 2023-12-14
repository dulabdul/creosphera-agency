import Body from '@/component/Layout/Body';
import './globals.css';
import localFont from 'next/font/local';
// Font files can be colocated inside of `app`

export const metadata = {
  title: 'CreoSphera',
  description: 'Kembangkan bisnis anda dengan creosphera',
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
      <Body font={proximaNova}>{children}</Body>
    </html>
  );
}
