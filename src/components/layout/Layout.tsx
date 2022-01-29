import Head from "next/head";
import { ReactNode } from "react";

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
      <main className="font-gothic text-[#353D40] md: text-sm">{children}</main>
    </>
  );
};

export default Layout;
