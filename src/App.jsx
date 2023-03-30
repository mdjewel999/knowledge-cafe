import { useState } from 'react'
import Blog from './compoments/Blog/Blog'
import Header from './compoments/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookmarked from './compoments/Bookmarked/Bookmarked';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
       <div className='container'>
             <div className='row'>
                <div className="col-md-8">
                <Blog></Blog>
                </div>
                
                <div className="col-md-4">
                  <Bookmarked></Bookmarked>
                </div>
                
             </div>
       </div>
      
    </div>
  )
}

export default App
