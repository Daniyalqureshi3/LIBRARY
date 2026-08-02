import Navbar from "./Navbar";
import BookForm from "./BookForm";
import { useNavigate } from "react-router-dom";
import"./Addbook.css"

function AddBook() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
<div className="back-container">
  <button
    className="back-btn"
    onClick={() => navigate("/")}
  >
    ← Back to Home
  </button>
</div>
      <BookForm />
    </>
  );
}

export default AddBook;