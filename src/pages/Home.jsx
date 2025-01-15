import BookCard from "../components/BookCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const { store }  = useGlobalReducer();
  
  return (
    <div className="container d-flex flex-column align-items-center">
      { store.books.map(book => <BookCard book={book} key={book.id} />) }
    </div>
  );
};
