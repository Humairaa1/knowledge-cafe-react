
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readTime , setReadTime] =useState(0);

  const handleBookmarkIcon = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  const handleReadTime = time =>{
    const newReadTime = readTime+time;
    setReadTime(newReadTime)
  }
  
  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-6xl mx-auto'>

      <Blogs 
      handleBookmarkIcon = {handleBookmarkIcon}
      handleReadTime={handleReadTime}
      ></Blogs>

      <Bookmarks
       readTime={readTime}
      bookmarks={bookmarks}></Bookmarks>

      </main>
    </>
  )
}

export default App
