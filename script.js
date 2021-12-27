let myLibrary = [];

const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.close');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.input');
const bookContainer = document.querySelector('.book-container');

btnOpen.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
    inputs.forEach((input) => {
        input.value = '';
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.elements['title'];
    const author = form.elements['author'];
    const pages = form.elements['pages'];
    const read = form.elements['read'];

    clearLibrary();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    displayLibrary();

    modal.style.display = 'none';
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (title + " by " + author + ", " + pages + ", " + read);
    }
}

Book.prototype.toggleRead = (read) => {
    return !read;
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.unshift(book);
}

function clearLibrary() {
    while(bookContainer.hasChildNodes()) {
        bookContainer.removeChild(bookContainer.firstChild);
    }
}

function displayLibrary() {
    myLibrary.forEach((book, index) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        const btnRemove = document.createElement('button');
        const btnToggleRead = document.createElement('button');

        div.classList.add('card');
        title.textContent = book.title;
        author.textContent = "Author: " + book.author;
        pages.textContent = "Pages: " + book.pages;
        read.textContent = "Read: " + book.read;
        btnRemove.textContent = "Remove";
        btnToggleRead.textContent = "Toggle Read";

        btnRemove.classList.add('btn');
        btnToggleRead.classList.add('btn');

        btnRemove.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            clearLibrary();
            displayLibrary();
        });

        btnToggleRead.addEventListener('click', () => {
            book.read = book.toggleRead(book.read);
            clearLibrary();
            displayLibrary();
        });

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(btnRemove);
        div.appendChild(btnToggleRead);

        bookContainer.appendChild(div);
    });
}

const exampleBook = new Book('Example', 'None', '0', false);
myLibrary.unshift(exampleBook);
displayLibrary();