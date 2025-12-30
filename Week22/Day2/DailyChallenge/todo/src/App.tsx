import { useState } from "react";
import type { Book } from "./types/Book";
import { List } from "./components/List";

export default function BookApp() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Learning React", author: "Alex Banks" },
    { id: 2, title: "TypeScript Handbook", author: "Microsoft" },
  ]);

  const addBook = () => {
    const newBook: Book = {
      id: Date.now(),
      title: "New Book",
      author: "Unknown Author",
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <h1>My Book List</h1>

      <button onClick={addBook}>Add Book</button>

      <List
        items={books}
        renderItem={(book) => (
          <div key={book.id}>
            <strong>{book.title}</strong>
            <div>{book.author}</div>
          </div>
        )}
      />
    </div>
  );
}