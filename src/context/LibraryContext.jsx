import { createContext, useContext, useReducer } from "react";

export const LibraryContext = createContext();

const initialState = {
  books: [],
  search: "",
  filter: "ALL",
  sort: "A-Z",
  editBook: null,
  selectedCategory: "ALL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case "EDIT_BOOK":
      return {
        ...state,
        editBook: action.payload,
      };

    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
        editBook: null,
      };
case "RETURN_BOOK":
  return {
    ...state,
    books: state.books.map((book) => {
      if (book.id === action.payload) {

        if (book.borrowed <= 0) return book;

        const newQuantity = book.quantity + 1;

        return {
          ...book,
          quantity: newQuantity,
          borrowed: book.borrowed - 1,
          availability: "Available",
        };
      }

      return book;
    }),
  };
    case "TOGGLE_FAVOURITE":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, favourite: !book.favourite }
            : book
        ),
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
      };

      case "SET_CATEGORY":
      return {
        ...state,
       selectedCategory: action.payload,
  };
case "BORROW_BOOK":
  return {
    ...state,
    books: state.books.map((book) => {
      if (book.id === action.payload) {

        if (book.quantity <= 0) return book;

        const newQuantity = book.quantity - 1;

        return {
          ...book,
          quantity: newQuantity,
          borrowed: book.borrowed + 1,
          availability:
            newQuantity === 0 ? "Not Available" : "Borrowed",
        };
      }

      return book;
    }),
  };

    default:
      return state;
  }
};

export const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const uselibrary = () => useContext(LibraryContext);