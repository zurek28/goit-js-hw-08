import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const formElementsArray = Array.from(form);

if (localStorage['feedback-form-state-message'] !== '') {
  message.textContent = localStorage['feedback-form-state-message'];
}

if (
  localStorage['feedback-form-state-email'] === '' ||
  localStorage['feedback-form-state-email'] === undefined
) {
  email.removeAttribute('value');
} else {
  email.setAttribute('value', localStorage['feedback-form-state-email']);
}

form.addEventListener('input', e => {
  formElementsArray.forEach(function (el) {
    if (el.value !== '') {
      localStorage.setItem(`feedback-form-state-${el.name}`, el.value);
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(
    `Email: ${localStorage.getItem(
      'feedback-form-state-email'
    )}, Message: ${localStorage.getItem('feedback-form-state-message')}`
  );

  localStorage.removeItem('feedback-form-state-email');
  localStorage.removeItem('feedback-form-state-message');

  formElementsArray.forEach(function (el) {
    if (el.value !== '') {
      el.value = '';
    }
  });
});
