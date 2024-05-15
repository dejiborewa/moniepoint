import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";

function App() {
  return (
    <main className="text-[40px] max-w-[3000px] mx-auto p-6">
      <Header />
      <Hero />
    </main>
  );
}

export default App;
