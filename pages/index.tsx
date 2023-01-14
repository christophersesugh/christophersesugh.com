import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";

function HomePage() {
  return (
    <>
      <AppHead title="CSA" />
      <Hero />
      <About />
    </>
  );
}

export default HomePage;
