import luxon from './luxon.js';

export default class Dates {
  constructor() {
    this.currentDate = document.getElementById('date');
  }

  showDate =() => {
    const date = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL);
    // Initial update
    this.currentDate.innerHTML = date;
    return date;
  };
}
