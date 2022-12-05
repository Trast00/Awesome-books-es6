const navList = document.getElementById('nav-list');
const navAddNew = document.getElementById('nav-addnew');
const navContact = document.getElementById('nav-contact');

const listBookSection = document.getElementById('list-book');
const addNewBook = document.getElementById('new-book');
const contactMe = document.getElementById('contact');

navList.addEventListener('click', () => {
  listBookSection.classList.remove('hidden');
  addNewBook.classList.add('hidden');
  contactMe.classList.add('hidden');
});
navAddNew.addEventListener('click', () => {
  listBookSection.classList.add('hidden');
  addNewBook.classList.remove('hidden');
  contactMe.classList.add('hidden');
});
navContact.addEventListener('click', () => {
  listBookSection.classList.add('hidden');
  addNewBook.classList.add('hidden');
  contactMe.classList.remove('hidden');
});