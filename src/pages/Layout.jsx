import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  const { dispatch } = useGlobalReducer();

  const getData = async () => {
    const resp = await fetch("https://library.dotlag.space/library");
    const data = await resp.json();
    dispatch({
      type: "load_books",
      books: data.books,
    });
    console.log("This code is running everywhere!")
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
    </ScrollToTop>
  );
};
