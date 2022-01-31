import Layout from "../src/components/layout/Layout";
import AboutMe from "../src/components/templates/AboutMe";
import MainVisual from "../src/components/templates/MainVisual";
import Projects from "../src/components/templates/Projects";

export default function Home() {
  return (
    <Layout>
      <MainVisual />
      <AboutMe />
      <Projects />
    </Layout>
  );
}
