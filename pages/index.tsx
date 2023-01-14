import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";
import Discord from "components/discord";
import Posts from "components/posts";

function HomePage() {
  return (
    <>
      <AppHead title="CSA" />
      <Hero />
      <About />
      <Discord />
      <Posts />
    </>
  );
}

export default HomePage;
