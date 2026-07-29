import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import BookList from "../Components/BookList";

function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <BookList />
    </>
  );
}

export default Home;