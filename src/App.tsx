import "./App.css";
import Analytics from "./components/analytics/analytics";
import Efficiency from "./components/efficiency/efficiency";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Data from "./components/data/data";
import Control from "./components/control/control";
import GetStarted from "./components/getStarted/getStarted";
import Footer from "./components/footer/footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
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
