import React from "react";
import { uselibrary } from "../context/LibraryContext";

function BookList() {
  const { state, dispatch } = uselibrary();

  const filteredBooks = state.books.filter((book) => {
    const search = state.search.toLowerCase();

    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h4>{book.category}</h4>
          <p>{book.description}</p>
          <h4>{book.availability}</h4>
          <h4>Quantity: {book.quantity}</h4>
          <h4>Price: {book.price}</h4>

          <div className="ad-div">
            <button
              onClick={() =>
                dispatch({
                  type: "EDIT_BOOK",
                  payload: book,
                })
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;