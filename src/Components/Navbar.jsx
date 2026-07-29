import Search from "./Search";
import Filter from "./Filter";
import CategoryList from "./CategoryList";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"



function Navbar() {
  const navigate = useNavigate();

  
  return (
<nav className="navbar">
  <div className="logo">
    <h2>📚 BookVerse</h2>
  </div>

  <div className="nav-center">
    <Filter />
    <CategoryList />
    <Search />
  </div>

  <div className="nav-right">
    <Link to="/add-book">
      <button>Add Book</button>
    </Link>
  </div>
</nav>
  );
}

export default Navbar;