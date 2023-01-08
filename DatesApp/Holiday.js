export default class Holiday {
  constructor(btnAdd, inputHoliday, laborList, laborTemplate) {
    this.btnAdd = btnAdd;
    this.inputHoliday = inputHoliday;
    this.laborList = laborList;
    this.laborTemplate = laborTemplate;
    this.holidaysArray = [];
  }

  inputValidationEmpty() {
    if (this.inputHoliday.value != "" || this.inputHoliday.value == "undefined")
      return true;
    else return false;
  }

  inputValidationDuplicated() {
    if (!this.holidaysArray.includes(this.inputHoliday.value.toString()))
      return true;
    else return false;
  }

  inputValidationSunday() {
    if (new Date(this.inputHoliday.value.toString()).getDay() != 6) return true;
    else return false;
  }

  addlaborItemTemplate(value) {
    const temp = this.laborTemplate.content.cloneNode(true);
    temp.querySelector(".labor-item").textContent = value;
    this.laborList.appendChild(temp)
  }
  
  addholiday() {
    this.btnAdd.addEventListener("click", () => {
      if (this.inputValidationEmpty()) {
        if (this.inputValidationDuplicated()) {
          if (this.inputValidationSunday()) {
            this.holidaysArray.push(this.inputHoliday.value.toString());
            this.addlaborItemTemplate(this.inputHoliday.value.toString());

          } else
            alert(
              `You've added a sunday. Every sunday is a holiday. try something different`
            );
        } else {
          alert(
            `You've already added this value. Try another one. 
            Try to add a date that's not a sunday, evry sunday is a holiday`
          );
          this.inputHoliday.value = "";
        }
      } else {
        alert(`Select a date`);
      }
    });
  }

  getHolidayArray() {
    return this.holidaysArray;
  }
}
