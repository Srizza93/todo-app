class Time {
  constructor() {
    this.date = new Date();
  }

  minutes() {
    return this.formatTime(this.date.getMinutes(), 2);
  }

  hours() {
    return this.formatTime(this.date.getHours(), 2);
  }

  day() {
    return this.formatTime(this.date.getDate(), 2);
  }

  month() {
    return this.formatTime(this.date.getMonth() + 1, 2);
  }

  year() {
    return this.formatTime(this.date.getFullYear(), 4);
  }

  formatTime(time, zeros) {
    return String(time).padStart(zeros, '0');
  }
}

const timeMod = new Time();

export default timeMod;
