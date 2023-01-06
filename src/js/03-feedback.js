import _ from 'lodash';

const form = document.querySelector('.feedback-form');

const formElementsArray = Array.from(form);

if (localStorage.getItem('feedback-form-state') !== null) {
  let tempData = JSON.parse(localStorage['feedback-form-state']);

  formElementsArray.forEach(function (el) {
    for (key in tempData) {
      if (key !== '' || key !== undefined) {
        if (key == el.name) {
          el.value = tempData[key];
        }
      }
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
  console.log(JSON.parse(localStorage['feedback-form-state']));

  localStorage.removeItem('feedback-form-state');

  formElementsArray.forEach(function (el) {
    if (el.value !== '') {
      el.value = '';
    }
  });
});
