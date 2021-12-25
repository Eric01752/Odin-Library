let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (title + " by " + author + ", " + pages + ", " + read);
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.unshift(book);
}

function displayLibrary() {
    const bookContainer = document.querySelector('.book-container');
    myLibrary.forEach((book) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');

        div.classList.add('card');
        title.textContent = book.title;
        author.textContent = "Author: " + book.author;
        pages.textContent = "Pages: " + book.pages;
        read.textContent = "Read: " + book.read;

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);

        bookContainer.appendChild(div);
    });
}

const book1 = new Book('Lord of the Rings', 'JRR Tolkin', '298', 'Yes');
const book2 = new Book('Book2', 'JRR Tolkin', '298', 'Yes');
const book3 = new Book('Book3', 'JRR Tolkin', '298', 'Yes');
const book4 = new Book('Book4', 'JRR Tolkin', '298', 'Yes');
myLibrary.unshift(book1);
myLibrary.unshift(book2);
myLibrary.unshift(book3);
myLibrary.unshift(book4);

displayLibrary();