import React, { useEffect,useState } from "react";
import { uselibrary } from "../context/LibraryContext";
import { useNavigate } from "react-router-dom";
import "./Bookform.css"
function BookForm() {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("Available");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { state, dispatch } = uselibrary();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      price,
      description,
      availability,
   quantity: Number(quantity),
  borrowed: 0,
  favourite: false,
    };

    if (state.editBook) {
  dispatch({
    type: "UPDATE_BOOK",
    payload: {
      id: state.editBook.id,
      title,
      author,
      category,
      price,
      quantity,
      availability,
      description,
    },
  });
} 
else {
  dispatch({
    type: "ADD_BOOK",
    payload: newBook,
  });
}
navigate("/");

    settitle("");
    setAuthor("");
    setCategory("");
    setPrice("");
    setDescription("");
    setQuantity(1);
    setAvailability("Available");

  };
  useEffect(() => {
  if (state.editBook) {

    settitle(state.editBook.title);
    setAuthor(state.editBook.author);
    setCategory(state.editBook.category);
    setPrice(state.editBook.price);
    setQuantity(state.editBook.quantity);
    setAvailability(state.editBook.availability);
    setDescription(state.editBook.description);
  }
}, [state.editBook]);

  return (
    <div className="form-container">
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Enter Book Name"
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          type="text"
          value={author}
          placeholder="Enter Author Name"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Science">Science</option>
          <option value="Programming">Programming</option>
          <option value="History">History</option>
          <option value="Novel">Novel</option>
          <option value="Business">Business</option>
          <option value="Islamic">Islamic</option>
          <option value="Biography">Biography</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="number"
          value={price}
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          value={quantity}
          placeholder="Enter Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />

        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <textarea
          value={description}
          placeholder="Enter Book Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
  {state.editBook ? "Update Book" : "Add Book"}
</button>
      </form>

    </div>
    
  );
}

export default BookForm;