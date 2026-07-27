import React from "react";
import { uselibrary } from "../context/LibraryContext";

function BookList() {
  const { state, dispatch } = uselibrary();

  return (
    <div>
      {state.books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h4>{book.category}</h4>
          <p>{book.description}</p>
          <h4>{book.availability}</h4>
          <h4>Quantity: {book.quantity}</h4>
          <h4>Price: {book.price}</h4>

          <div className="ad-div">


          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;