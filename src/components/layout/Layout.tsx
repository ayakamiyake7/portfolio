import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Ayaka Miyake</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="font-gothic text-[#353D40] md: text-sm">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
