import React from 'react'
import { uselibrary } from '../context/LibraryContext'
import "./Dashboard.css"

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
<div className="dashboard">

  <div className="card">
    <h3>Total Books</h3>
    <h2>{totalBooks}</h2>
  </div>

  <div className="card">
    <h3>Available Books</h3>
    <h2>{availableBooks}</h2>
  </div>

  <div className="card">
    <h3>Borrowed Books</h3>
    <h2>{BorrowBook}</h2>
  </div>

  <div className="card">
    <h3>Favourite Books ❤️</h3>
    <h2>{FAavoritebook}</h2>
  </div>

  <div className="card">
    <h3>Categories</h3>
    <h2>{catogiry}</h2>
  </div>

</div>
  )
}

export default Dashboard
