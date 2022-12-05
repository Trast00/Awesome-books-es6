import Book from './Book.js';

export default class ListBooks {
  constructor() {
    this.books = [];
    this.currendID = 0;
  }

  add = (title, author) => {
    const book = new Book(this.currendID, title, author);
    this.books.push(book);
    this.displayBook(title, author);
  }

  delete = (id) => {
    document.getElementById(id).remove();
    this.books = this.books.filter((book) => book.id !== id);
  }

  displayBook = (title, author) => {
    const itemId = this.currendID;

    const listBooks = document.querySelector('.list-book');
    const li = document.createElement('li');
    li.id = itemId;
    li.classList.add('book');
    const pTitleAuthor = document.createElement('p');
    pTitleAuthor.textContent = `"${title}" by ${author}`;

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('buttons');
    btnRemove.textContent = 'Remove';

    btnRemove.addEventListener('click', () => {
      this.delete(itemId);
    });

    li.append(pTitleAuthor, btnRemove);

    listBooks.append(li);
    this.currendID += 1;
  }
}