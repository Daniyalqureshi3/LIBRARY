import { useState } from 'react'
import './App.css'
import { LibraryProvider } from './context/LibraryContext'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'

function App() {


  return (
    <>
     <LibraryProvider>
      <BookForm/>
      <BookList/>
     </LibraryProvider>
    </>
  )
}

export default App
