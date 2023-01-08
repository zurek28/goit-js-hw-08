'use strict';
import _ from 'lodash';

const form = document.querySelector('.feedback-form');

const formElementsArray = Array.from(form);

if (localStorage.getItem('feedback-form-state') !== null) {
  let tempData = JSON.parse(localStorage['feedback-form-state']);

  formElementsArray.forEach(function (el) {
    if (tempData[el.name] && tampData[el.name] != '') {
      el.value = tempData[el.name];
    }
  });
}

let dataStorage = {};

form.addEventListener('input', e => {
  formElementsArray.forEach(function (el) {
    if (el.value !== '') {
      dataStorage[el.name] = el.value;
      localStorage.setItem('feedback-form-state', JSON.stringify(dataStorage));
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (localStorage['feedback-from-state'] !== null) {
    console.log(JSON.parse(localStorage['feedback-form-state']));
  }

  localStorage.removeItem('feedback-form-state');

  formElementsArray.forEach(function (el) {
    if (el.value !== '') {
      el.value = '';
    }
  });
});
