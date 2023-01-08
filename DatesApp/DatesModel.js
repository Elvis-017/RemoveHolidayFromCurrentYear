export default class DatesModel {
  constructor(baseDate, holidays, jsonContent, btnCreate) {
    this.baseDate = baseDate;
    this.arr = [];
    this.holidays = holidays;
    this.jsonContent = jsonContent;
    this.btnCreate = btnCreate;
  }

  InsertDateData() {
    let magicDate = new Date(new Date().getFullYear(), 11, 31).getTime();
    let diff = Math.round((magicDate - this.baseDate) / 86400000);

    for (let i = 1; i <= diff; i++) {
      let data = new Date(new Date().getFullYear(), 0, i);

      this.arr.push(
        `${data.getFullYear()}/${data.getMonth() + 1}/${data.getDate()}`
      );
    }
  }

  removeHolidays() {
    for (let k = 0; k < this.holidays.length; k++) {
      const element = this.holidays[k];

      if (this.arr.includes(element)) {
        let index = this.arr.indexOf(element);

        this.arr.splice(index, 1);
      }
    }
  }

  removeWeekendsHolidays() {
    for (let i = 0; i < this.arr.length; i++) {
      const element = this.arr[i];

      if (new Date(element).getDay() == 0) {
        let index = this.arr.indexOf(element);
        this.arr.splice(index, 1);
      }
    }
  }

  getDateData() {
    return {
      ...this.arr,
    };
  }

  generateJsonData() {
    let data = JSON.stringify(this.getDateData());
    this.btnCreate.addEventListener("click", () => {
      this.jsonContent.innerHTML = `<span>${data}</span>`;
      this.jsonContent.classList.remove("hide");
    });
  }
}
