class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
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
  }

  // Add a new book to the library
  addBook(title, author) {
    const id = this.nextBookId++;
    let books = this.books ;
    
    for(let i=0;i<books.length ;i++ ){

      if(books[i].title=== title && books[i].author){
        console.log("book already exists") ;
        return false ;
      }
    }
    
    books[id] = new Book(id, title, author);
    console.log(books);
    return id;
  }

  // Borrow a book from the library
  borrowBook(bookId) {
    const book = this.books[bookId];
    if (book && book.borrowBook()) {
      return true;
    }
    return false;
  }

  // Return a book to the library
  returnBook(bookId) {
    const book = this.books[bookId];
    if (book && book.returnBook()) {
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
      isBorrowed: book.isBorrowed
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
