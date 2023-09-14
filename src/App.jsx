
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  
  return (
    <>
      
      <Header></Header>
      <main className='md:flex'>

      <Blogs></Blogs>
      <Bookmarks></Bookmarks>

      </main>
    </>
  )
}

export default App
