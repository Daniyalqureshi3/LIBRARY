import React from 'react'
import { uselibrary } from '../context/LibraryContext'

function Dashboard() {
    const {state} =uselibrary();
      const totalBooks = state.books.length;

 const availableBooks = state.books.filter(
  (book) => book.availability === "Available"
).length

const BorrowBook = state.books.filter(
  (book) => book.borrowed > 0
).length

const FAavoritebook = state.books.filter(
  (book) => book.favourite
).length

const catogiry = new Set(state.books.map((book) => book.category)).size
  return (
    <div>
      <h2>Dshboard</h2>
          <div>
      
      <h5>total Books is: {totalBooks}</h5>
      <h3>Available Book is: {availableBooks}</h3>
      <h4>you borowed is: {BorrowBook}</h4>
      <h6>Favorite❤️ {FAavoritebook}</h6>
      <h3>types of books: {catogiry}</h3>

    </div>
    </div>
  )
}

export default Dashboard
