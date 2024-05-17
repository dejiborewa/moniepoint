import "./App.css";
import Analytics from "./components/analytics/analytics";
import Efficiency from "./components/efficiency/efficiency";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Data from "./components/data/data";

function App() {
  return (
    <main className="max-w-[3000px] mx-auto p-6 text-black">
      <Header />
      <Hero />
      <Analytics />
      <Efficiency />
      <Data />
    </main>
  );
}

export default App;
