import { useState } from 'react'
import './App.css'
import { LibraryProvider } from './context/LibraryContext'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import Search from './Components/Search'

function App() {


  return (
    <>
     <LibraryProvider>
      <BookForm/>
      <Search/>
      <BookList/>
     </LibraryProvider>
    </>
  )
}

export default App
