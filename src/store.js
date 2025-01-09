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
}
