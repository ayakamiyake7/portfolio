import Layout from "../src/components/layout/Layout";
import Footer from "../src/components/organisms/Footer";
import Header from "../src/components/organisms/Header";
import MainVisual from "../src/components/templates/MainVisual";

export default function Home() {
  return (
    <Layout>
      <Header />
      <MainVisual />
      <Footer />
    </Layout>
  );
}
