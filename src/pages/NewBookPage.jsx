import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const NewBookPage = () => {
  const { dispatch } = useGlobalReducer();

  const [book, setBook] = useState({
    "title": "",
    "author": "",
    "cover": "",
    "num_pages": "",
    "year_published": "",
    "isbn13": "",
    "isbn10": "",
    "is_awesome": false,
    "have_read": false,
  });

  const submitForm = async (ev) => {
    ev.preventDefault();
    const resp = await fetch("https://library.dotlag.space/library/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // MIME type
      },
      body: JSON.stringify(book),
    });

    if (resp.ok) {
      const data = await resp.json();
      dispatch({
        type: "add_book",
        book: data,
      })
    }
  };

  const handleChange = (ev) => {
    let newBook = structuredClone(book);

    if (["num_pages", "year_published"].includes(ev.target.id)) {
      newBook[ev.target.id] = parseInt(ev.target.value);
      setBook(newBook);
      return;
    }

    if (["is_awesome", "have_read"].includes(ev.target.id)) {
      newBook[ev.target.id] = ev.target.checked;
      setBook(newBook);
      return;
    }

    newBook[ev.target.id] = ev.target.value;
    setBook(newBook);
  }

  return <form className="container" onSubmit={submitForm} onChange={handleChange}>
    <div className="row">
      <div className="col">
        <h1>Create A Book</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={book.title} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" value={book.author} />
        </div>
      </div>
      <div className="col">
        <div className="mb-3">
          <label htmlFor="isbn10" className="form-label">ISBN-10</label>
          <input type="text" className="form-control" id="isbn10" value={book.isbn10} />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn13" className="form-label">ISBN-13</label>
          <input type="text" className="form-control" id="isbn13" value={book.isbn13} />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="mb-3">
          <label htmlFor="cover" className="form-label">Cover URL</label>
          <input type="text" className="form-control" id="cover" value={book.cover} />
        </div>
        <div className="mb-0">
          <input type="checkbox" className="form-check-input me-1" id="is_awesome" checked={book.is_awesome} />
          <label htmlFor="is_awesome" className="form-check-label">Is Awesome?</label>
        </div>
        <div className="mb-3">
          <input type="checkbox" className="form-check-input me-1" id="have_read" checked={book.have_read} />
          <label htmlFor="have_read" className="form-check-label">Have Read?</label>
        </div>
      </div>
      <div className="col">
        <div className="mb-3">
          <label htmlFor="year_published" className="form-label">Year Published</label>
          <input type="number" className="form-control" id="year_published" value={book.year_published} />
        </div>
        <div className="mb-3">
          <label htmlFor="num_pages" className="form-label"># Pages</label>
          <input type="number" className="form-control" id="num_pages" value={book.num_pages} />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col d-flex flex-row justify-content-center gap-3">
        <button className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-secondary" to="/">
          Return home
        </Link>
      </div>
    </div>
  </form>
}

export default NewBookPage;
