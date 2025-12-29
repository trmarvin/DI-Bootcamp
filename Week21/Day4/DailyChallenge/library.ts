interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    const exists = this.books.some((b) => b.isbn === book.isbn);
    if (exists) {
      throw new Error(`A book with ISBN ${book.isbn} already exists.`);
    }

    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find((b) => b.isbn === isbn);
  }

  protected getBooks(): readonly Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getBooks().map((b) => b.title);
  }
}

const myDigitalLibrary = new DigitalLibrary("https://example-library.com");

myDigitalLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "978-0132350884",
  publishedYear: 2008,
  genre: "Programming",
});

myDigitalLibrary.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt & David Thomas",
  isbn: "978-0135957059",
  publishedYear: 2019,
});

myDigitalLibrary.addBook({
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  isbn: "978-0596517748",
  publishedYear: 2008,
  genre: "Programming",
});

const isbnsToCheck = [
  "978-0132350884",
  "978-0135957059",
  "not-a-real-isbn",
];

for (const isbn of isbnsToCheck) {
  const details = myDigitalLibrary.getBookDetails(isbn);

  if (!details) {
    console.log(`No book found for ISBN: ${isbn}`);
    continue;
  }

  console.log("Book details:");
  console.log(`- Title: ${details.title}`);
  console.log(`- Author: ${details.author}`);
  console.log(`- ISBN: ${details.isbn}`);
  console.log(`- Published: ${details.publishedYear}`);
  console.log(`- Genre: ${details.genre ?? "N/A"}`);
  console.log("-----");
}

console.log(`Library website: ${myDigitalLibrary.website}`);
console.log("All book titles:", myDigitalLibrary.listBooks());