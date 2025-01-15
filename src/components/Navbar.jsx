import { Link, useLocation } from "react-router-dom";

import "../assets/css/Navbar.css";

export const Navbar = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return path === location.pathname;
  }

  const inBookPath = () => {
    return location.pathname.match(
      /(\/books\/\d+$|\/books$)/i
    );
  }

  return (
    <nav className="navbar bg-primary-subtle mb-2">
      <div className="container">
        <Link to="/" className="navbar-brand bn-brand">
          Book Nook
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isCurrentPage("/") ? "active" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${inBookPath() ? "active" : ""}`} aria-current="page" to="/books">
                View Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isCurrentPage("/books/new") ? "active" : ""}`} aria-current="page" to="/books/new">
                Add A Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};