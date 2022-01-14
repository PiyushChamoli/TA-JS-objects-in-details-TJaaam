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
    constructor (title,category,author,isRead=false,finished) {
        this
    }
}