export default class Showsections {
  constructor() {
    this.bookList = document.querySelector('.bookList');
    this.addNew = document.querySelector('.form_styles');
    this.contacts = document.querySelector('.contact-section');
    this.bookSection = document.querySelector('.listbooks');
    this.addNewSection = document.querySelector('.addednew');
    this.contactMe = document.querySelector('.contactme');
  }

  singlePage = () => {
    this.bookList.style.display = 'none';
    this.contacts.style.display = 'none';

    this.bookSection.addEventListener('click', () => {
      this.bookList.style.display = 'block';
      this.addNew.style.display = 'none';
      this.contacts.style.display = 'none';
    });

    this.addNewSection.addEventListener('click', () => {
      this.bookList.style.display = 'none';
      this.addNew.style.display = 'block';
      this.contacts.style.display = 'none';
    });

    this.contactMe.addEventListener('click', () => {
      this.bookList.style.display = 'none';
      this.addNew.style.display = 'none';
      this.contacts.style.display = 'block';
    });
  }
}
