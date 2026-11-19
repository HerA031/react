import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  const [] = useState(0);

  return (
  <main>
      <Header/>
      <Footer/>
      <Section/>
  </main>
  )
}

export default App;
