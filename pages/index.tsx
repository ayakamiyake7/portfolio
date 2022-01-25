import Layout from "../src/components/layout/Layout";
import Header from "../src/components/organisms/Header";

export default function Home() {
  return (
    <Layout>
      <Header />
      <h1 className="text-3xl font-bold underline text-yellow">Hello world!</h1>
    </Layout>
  );
}
