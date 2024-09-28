const { Library } = require("./solution");


/* const { Library } = require('./library-management/library'); */
const library = new Library();

library.addBook("hi","yash");
library.addBook("hilll", "yashaaa");

library.borrowBook(1, "mee");

console.log(library.listAllBooks());