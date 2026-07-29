import { LibraryProvider } from "./context/LibraryContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"

import Home from "./Pages/Home";
import AddBook from "./Components/AddBook";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-book",
      element: <AddBook />,
    },
  ]);

  return (
    <LibraryProvider>
      <RouterProvider router={router} />
    </LibraryProvider>
  );
}

export default App;