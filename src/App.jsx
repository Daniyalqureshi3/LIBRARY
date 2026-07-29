import { useState } from 'react'
import './App.css'
import { LibraryProvider } from './context/LibraryContext'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import Search from './Components/Search'
import Filter from './Components/Filter'
import Sort from './Components/Sort'
import CategoryList from './Components/CategoryList'
import Dashboard from './Components/Dashboard'

function App() {


  return (
    <>
     <LibraryProvider>
      <Dashboard/>
      <BookForm/>
      <Filter/>
      <Sort/>
      <Search/>
      <CategoryList/>
      <BookList/>
     </LibraryProvider>
    </>
  )
}

export default App
