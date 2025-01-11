import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [editing, setEditing] = useState(false);

  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    setBook(store.books.find((book) => book.id == id))
  }, [store])

  const submitEdit = async () => {
    const resp = await fetch(`https://library.dotlag.space/library/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
    const data = await resp.json();

    dispatch({
      type: "update_book",
      updated_book: data
    });
    
    setBook(data);
    setEditing(!editing);
  }

  const cancelEdit = () => {
    window.location = window.location;
  }

  return (
    <div className="container mt-3 px-5">
      <i onClick={() => setEditing(!editing)} class="fa-solid fa-wand-magic-sparkles"></i>
      {editing ? (<>
        <i onClick={submitEdit} class="fa-solid fa-check"></i>
        <i onClick={cancelEdit} class="fa-solid fa-xmark"></i>
      </>) : ""}

      <h3>{editing ? "edit mode" : "view mode"}</h3>

      <h1>{
        editing ? 
        <input
          value={book.title}
          onChange={
            ev => setBook({
              ...book,
              title: ev.target.value
            })
          }
        />
        : book?.title
      }</h1>
      <h2>{
        editing ? 
        <input
          value={book.author}
          onChange={
            ev => setBook({
              ...book,
              author: ev.target.value
            })
          }
        />
        : book?.author
      }</h2>

      <img src={book?.cover} alt="" />
    </div>
  );
};

export default BookPage;
