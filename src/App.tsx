import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { BookList } from "./components/BookList/BookList";
import { AppRouter } from "./router/AppRouter";
import { IBook } from "./types/index";

const App = () => {
 const [books, setBooks] = useState<IBook[]>([]);
 useEffect(() => {
  fetch("https://api.itbook.store/1.0/new")
   .then((res) => res.json())
   .then((data) => {
    setBooks(data.books);
   });
 }, []);
 return (
  <BrowserRouter>
   <AppRouter />
   <div>
    <h1>Books</h1>
    <BookList books={books} />
   </div>
  </BrowserRouter>
 );
};

export default App;
