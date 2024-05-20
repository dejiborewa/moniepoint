import "./App.css";
import Analytics from "./components/analytics/analytics";
import Efficiency from "./components/efficiency/efficiency";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Data from "./components/data/data";
import Control from "./components/control/control";
import GetStarted from "./components/getStarted/getStarted";
import Footer from "./components/footer/footer";
import { characterSplit, characterVerticalAnimationIn, scaleFromZero, textSplit, textVerticalAnimationIn } from "./animations/text-animations";
import { useLayoutEffect } from "react";
import gsap from "gsap";

function App() {
  useLayoutEffect(() => {
    textSplit();
    characterSplit();

    const allVerticalParagragh = document.querySelectorAll(
      ".animated-text.vertical-anim"
    );
    const allVerticalCharaters = document.querySelectorAll(
      ".animated-character.vertical-anim"
    );

    allVerticalParagragh.forEach((paragraph) => {
      const text = paragraph.querySelectorAll(".paragraph-word");

      text.forEach((text) => {
        gsap.set(text, { y: "500%" });
      });
    });

    allVerticalCharaters.forEach((paragraph) => {
      const text = paragraph.querySelectorAll(".paragraph-character");

      text.forEach((text) => {
        gsap.set(text, { y: "500%" });
      });
    });

    textVerticalAnimationIn();
    characterVerticalAnimationIn();
    scaleFromZero();
  }, []);

  return (
    <main className="max-w-[3000px] mx-auto p-6 text-black">
      <Header />
      <Hero />
      <Analytics />
      <Efficiency />
      <Data />
      <Control />
      <GetStarted />
      <Footer />
    </main>
  );
}

export default App;
