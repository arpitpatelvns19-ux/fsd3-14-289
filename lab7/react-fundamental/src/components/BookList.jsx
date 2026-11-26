import Book from "./Book.jsx";
import { books } from "../data.js";

function BookList() {
  return (
    <>
      <h1> Book List are : total {books.length} found</h1>

      {books.map((item) => (
        <Book {...item} />
      ))}
    </>
  );
}
export default BookList;