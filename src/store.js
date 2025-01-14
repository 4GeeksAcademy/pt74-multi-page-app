export const initialStore = () => {
  return {
    books: [],
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type === "load_books") {
    const { books } = action;

    return {
      ...store,
      books: books
    }
  }

  if (action.type === "add_book") {
    const { book } = action;

    return {
      ...store,
      books: [...store.books, book]
    }
  }

  if (action.type === "update_book") {
    // Get the updated book
    const { updated_book } = action;

    // Find the index of the old book
    const book_idx = store.books.findIndex(
      (book) => book.id === updated_book.id
    );

    // Replace the old book with new.
    let updated_books = store.books;
    updated_books.splice(book_idx, 1, updated_book);

    // Return the updated store.
    return {
      ...store,
      books: updated_books,
    }
  }
}
