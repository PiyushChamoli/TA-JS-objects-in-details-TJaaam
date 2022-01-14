class BookList {
    constructor () {
        this.books = [];
        this.readBookIndex = 0;
    }
    add (bookList) {
        this.books.concat(bookList);
    }
    getCurrentBook () {
        return this.books[this.readBookIndex];
    }
    getNextBook () {
        this.readBookIndex += 1;
        return this.books[this.readBookIndex];
    }
    getPrevBook () {
        this.readBookIndex -= 1;
        return this.books[this.readBookIndex];
    }
    changeCurrentBook (index) {
        this.readBookIndex = index;
    }
}

class Book {
    constructor (title,category,author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.read = false;
        this.finishedDate = null;
    }
    markBookAsRead () {
        this.read = true;
        this.finishedDate = Date.now();
    }
}

//Test

let book1 = new Book("To kill a mockingbird", "Non-fiction","Harper Lee");
let book2 = new Book("The lord of the rings","Fiction", "JRR Tolkien");

let library = new BookList();
library.add([book1,book2]);