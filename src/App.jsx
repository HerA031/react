
import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Section from './components/Section'
import Aside from './components/Aside'
import Main from './components/Main'
import Button from './components/Button'

function App() {

  return (
    <>
    <Main content={'메인 영역입니다.'} bgColor={'skyblue'}/>
    <h1>Hello React</h1>
    <Button {...buttonProps}/>
    <Button text={'메일'} color={'red'}/>
    <Button text={'카페'} color={'blue'}/>
      <strong>중요</strong>
    <Button text={'블로그'}/>
    </>
    )
}

export default App