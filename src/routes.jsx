// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";

import BookPage from "./pages/BookPage";
import NewBookPage from "./pages/NewBookPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/books/new" element={<NewBookPage />} />
      <Route path="/books/:id" element={<BookPage />} />
      <Route path="*" element={<h1>Page not found (unfortunately)!</h1>} />
    </Route>
  )
);