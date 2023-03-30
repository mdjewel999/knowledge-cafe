import { useState } from 'react'
import Blog from './compoments/Blog/Blog'
import Header from './compoments/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      
    </div>
  )
}

export default App
