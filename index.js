import Bookstore from './modules/createList.js';
import Dates from './modules/dates.js';
import Showsections from './modules/displays.js';

const currentDate = new Dates();
const displaySections = new Showsections();
const createBook = new Bookstore();

currentDate.showDate();
displaySections.singlePage();
createBook.formAct();
createBook.storedLocal();
createBook.createLibrary();
