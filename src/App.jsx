import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Counter from "./components/Counter";
import Exam1 from "./components/Exam1";
import Exam2 from "./components/Exam2";
import Exam3 from "./components/Exam3";
import "./App.css";

function App() {

  const user={
    name:'Elice',
    age:20
  }

  return (
    <>
    <Exam1 {...user}/>
      <h1>Hello react!</h1>
      <Counter/>
      <Exam2/>
      <Exam3/>
    </>
  )
}

export default App;
