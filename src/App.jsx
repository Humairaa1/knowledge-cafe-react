
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks , setBookmarks] = useState([]);

  const handleBookmarkIcon = blog =>{
    console.log('click bookmark');
  }
  
  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-5xl mx-auto'>

      <Blogs handleBookmarkIcon = {handleBookmarkIcon}></Blogs>
      <Bookmarks></Bookmarks>

      </main>
    </>
  )
}

export default App
