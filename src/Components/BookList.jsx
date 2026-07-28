import React from "react";
import { uselibrary } from "../context/LibraryContext";

function BookList() {
  const { state, dispatch } = uselibrary();

  let filteredBooks = state.books.filter((book) => {
    const search = state.search.toLowerCase();

    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  });

  if (state.filter === "Available") {
  filteredBooks = filteredBooks.filter(
    (book) => book.availability === "Available"
  );
}

if (state.filter === "Borrowed") {
  filteredBooks = filteredBooks.filter(
    (book) => book.availability === "Borrowed"
  );
}

if (state.filter === "Favourite") {
  filteredBooks = filteredBooks.filter(
    (book) => book.favourite
  );
}

if (state.sort === "A-Z") {
  filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
}

if (state.sort === "Z-A") {
  filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
}

if (state.sort === "AUTHOR") {
  filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
}
if (state.selectedCategory !== "ALL") {
  filteredBooks = filteredBooks.filter(
    (book) => book.category === state.selectedCategory
  );
}

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
            <div className="taken">
 <button
 disabled={Number(book.quantity) <= 0}
  onClick={() => {

    dispatch({
      type: "BORROW_BOOK",
      payload: book.id,
    });
  }}
>
  Borrow
</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;