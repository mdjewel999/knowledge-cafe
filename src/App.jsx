import { useEffect, useState } from 'react'
import Blog from './compoments/Blog/Blog'
import Header from './compoments/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookmarked from './compoments/Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)
  const [booksmark, setBooksmark] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  
  const bookmarkBlog = (blog) => {
    const findBup = booksmark.find(b => b.id === blog.id)
    if(!findBup) {
      setBooksmark([...booksmark, blog])
    } else {
      toast.error('Blog already added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

// console.log(booksmark)

  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className="col-md-8">

            {blogs.map((b) => <Blog key={b.id} bookmarkBlog={bookmarkBlog} blog={b}></Blog>)}
              
          </div>

          <div className="col-md-4">
            <Bookmarked booksmark={booksmark}/>
          </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
