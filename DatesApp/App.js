import DatesModel from "./DatesModel.js";
import Holiday from "./Holiday.js";

const yearEntered = new Date().getFullYear();

const BTN_ADD = document.getElementById('btn-add');
const INPUT_HOLIDAY = document.getElementById('input-holiday');
const LABOR_LIST = document.getElementsByClassName('labor-list')[0];
const LABOR_TEMPLATE_ITEM = document.getElementById('template');

const JSON_CONTENT = document.getElementById('json-content')
const BTN_CREATE = document.getElementById('btn-create')

let holiday = new Holiday(BTN_ADD, INPUT_HOLIDAY, LABOR_LIST, LABOR_TEMPLATE_ITEM)
holiday.addholiday();

let date = new DatesModel(new Date(yearEntered, 0, 0).getTime(), holiday.getHolidayArray(), JSON_CONTENT, BTN_CREATE);
date.InsertDateData();
date.removeHolidays();
date.removeWeekendsHolidays();

date.generateJsonData();




