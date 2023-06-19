export default class Bookstore {
  constructor() {
    this.BooksContainer = document.querySelector('.bookList');
    this.bookTitle = document.querySelector('.title');
    this.bookAuthor = document.querySelector('.author');
    this.bookLibrary = [];
    this.addBook = this.addBook.bind(this);
    this.form = document.querySelector('form');
  }

  storedLocal = () => {
    if (localStorage.getItem('books') == null) {
      localStorage.setItem('books', JSON.stringify(this.bookLibrary));
    }

    const store = localStorage.getItem('books');
    if (store) {
      this.bookLibrary = JSON.parse(store);
    }
  }

  createLibrary = () => {
    this.BooksContainer.innerHTML = '';
    this.bookLibrary.forEach((book, index) => {
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('books_container');
      bookContainer.innerHTML = `
            <p>"${book.titleBook}" by ${book.authorBook}</p>
            <button id=${index} class="deleteBtn">Remove</button>
      `;
      this.BooksContainer.appendChild(bookContainer);
    });
  }

  addBook = (e) => {
    e.preventDefault();
    const titleBook = this.bookTitle.value;
    const authorBook = this.bookAuthor.value;
    const newBooks = { titleBook, authorBook };

    this.bookLibrary.push(newBooks);
    localStorage.setItem('books', JSON.stringify(this.bookLibrary));
    this.createLibrary();

    // Reset input fields
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  removeBook = (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      const buttonId = parseInt(e.target.id, 10);
      this.bookLibrary = this.bookLibrary.filter((book, bookIndex) => bookIndex !== buttonId);
      localStorage.setItem('books', JSON.stringify(this.bookLibrary));
      this.createLibrary();
    }
  }

  formAct = () => {
    this.BooksContainer.addEventListener('click', this.removeBook.bind(this));
    this.form.addEventListener('submit', this.addBook);
  }
}
