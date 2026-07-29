import Navbar from "./Navbar";
import BookForm from "./BookForm";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button
      onClick={()=>{
        navigate("/")
      }}
      >back to Home</button>
      <BookForm />
    </>
  );
}

export default AddBook;