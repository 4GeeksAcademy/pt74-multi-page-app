import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const BookPage = () => {
  const { id } = useParams();
  // const nav = useNavigate();
  const [book, setBook] = useState({});
  const { store } = useGlobalReducer();

  useEffect(() => {
    setBook(store.books.find((book) => book.id == id))
    // if (!book && store.books) {
    //   nav("/")
    // }
  }, [store])

  return (
    <div className="container mt-3 px-5">
      <h1>{book?.title}</h1>
      <h2>{book?.author}</h2>
      <img src={book?.cover} alt="" />
    </div>
  );
};

export default BookPage;
