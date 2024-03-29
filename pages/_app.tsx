import "swiper/css/bundle";
import "../src/styles/globals_dev.css";
import "../src/styles/globals.css";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
