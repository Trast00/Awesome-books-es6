import luxon from "./modules/luxon.js";
import ListBooks from "./modules/ListBook.js";

//var DateTime = luxon.DateTime;
const pDateTime = document.getElementById('dateTime')
pDateTime.textContent =  `Date and Time: ${luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED) }`

const listBook = new ListBooks()

const form = document.getElementById('addNewBook')
const [title, author, btnAddBook] = form.elements
btnAddBook.addEventListener('click', (event) => {
  const error = document.getElementById('error');
  if (title.value.length === 0 || author.value.length === 0) {
    error.classList.remove('hidden');
    event.preventDefault();
  } else {
    error.classList.add('hidden');
    listBook.add(title.value, author.value);
  }
});

//  Add the book in the local storage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('listBook', JSON.stringify(listBook.books));
});

if (window.localStorage.getItem('listBook') !== 'undefined') {
  const list = JSON.parse(window.localStorage.getItem('listBook'));
  list.forEach((books) => {
    listBook.add(books.title, books.author);
  });
}