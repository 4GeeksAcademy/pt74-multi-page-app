import { useEffect } from "react";
import { useState } from "react";
import BookCard from "../components/BookCard";

export const Home = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const resp = await fetch("https://library.dotlag.space/library");
    const data = await resp.json();
    setBooks(data.books);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      { books.map(book => <BookCard book={book} key={book.id} />) }
    </div>
  );
};
