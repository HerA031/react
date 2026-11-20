
import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Section from './components/Section'
import Aside from './components/Aside'
import Main from './components/Main'
import Button from './components/Button'
import PostItem from './components/Postitem'

function App() {
  const posts = [
    {id: 1, title: "React 시작하기", author: "홍길동"},
    {id: 2, title: "JS 문법 정리", author: "김철수"},
    {id: 3, title: "CSS 레이아웃", author: "이영희"},
  ]
  
  return (
    <div>
      <h1>게시글</h1>
      {/* posts map으로 PostItem 렌더 */}
    </div>
  );
}

export default App