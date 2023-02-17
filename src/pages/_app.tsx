import { type AppType } from "next/dist/shared/lib/utils";
import localFont from '@next/font/local';

import "../styles/globals.css";
const myFont = localFont({ variable: '--font-gunji', src: '../fonts/gunji.ttf' });

const MyApp: AppType = ({ Component, pageProps }) => {
  return <div className={`${myFont.variable} App`}>
    <Component {...pageProps} />
  </div>;
};

export default MyApp;
