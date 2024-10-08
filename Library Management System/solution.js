class Book {
  constructor(id, title, author,borrowerName) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
    this.borrowerName = borrowerName || null;  
  }

  borrowBook() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      return true;
    }
    return false;
  }

  returnBook() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      return true;
    }
    return false;
  }
}

class Library {
  constructor() {
    this.books = {};
    this.nextBookId = 1;
    this.borrowedBooks = {};  // Separate log for borrowed books
  }

  // Add a new book to the library
  addBook(title, author) {
    const id = this.nextBookId++;
    let books = this.books;
    const booksArray = Object.values(books);
    const bookfound = booksArray.find(item => (item.title === title && item.author === author));
    if (bookfound) {
        console.log("book already exists") ;
        return false ;
    }
    
    books[id] = new Book(id, title, author);
    console.log(books);
    return id;
  }

  // Borrow a book from the library
  borrowBook(bookId,borrowerName) {
    const book = this.books[bookId];
    if (book && book.borrowBook()) {
        book.borrowerName = borrowerName;
        this.borrowedBooks[bookId] = book;
        return true;
    }
    return false;
  }

  // Return a book to the library
  returnBook(bookId) {
    const book = this.books[bookId];
    if (book && book.returnBook()) {
        delete this.borrowedBooks[bookId];  
      return true;
    }
    return false;
  }

  // Get details of a book
  getBookDetails(bookId) {
    const book = this.books[bookId];
    if (book) {
      return {
        id: book.id,
        title: book.title,
        author: book.author,
        isBorrowed: book.isBorrowed
      };
    }
    return null; // Book not found
  }

  // List all books in the library
  listAllBooks() {
    return Object.values(this.books).map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
        isBorrowed: book.isBorrowed,
      borrowerName: book.borrowerName
    }));
  }

  // Remove a book from the library
  removeBook(bookId) {
    const book = this.books[bookId];
    if (book) {
      delete this.books[bookId];
      return true;
    }
    return false;
  }
}

// Exporting the Library class for use
module.exports = { Library };
