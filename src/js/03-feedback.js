import _ from 'lodash';

const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const submitForm = document.querySelector('.feedback-form');

if (
  localStorage['feedback-form-state-email'] === '' ||
  localStorage['feedback-form-state-email'] === undefined
) {
  email.removeAttribute('value');
} else {
  email.setAttribute('value', localStorage['feedback-form-state-email']);
}

if (localStorage['feedback-form-state-message'] !== '') {
  message.textContent = localStorage['feedback-form-state-message'];
}

email.addEventListener(
  'input',
  _.throttle(e => {
    localStorage.setItem('feedback-form-state-email', e.target.value.trim());
  }, 500)
);

message.addEventListener(
  'input',
  _.throttle(e => {
    localStorage.setItem('feedback-form-state-message', e.target.value.trim());
  }, 500)
);

submitForm.addEventListener('submit', () => {
  console.log(
    `Email: ${localStorage.getItem(
      'feedback-form-state-email'
    )}, Message: ${localStorage.getItem('feedback-form-state-message')}`
  );

  // console.log(localStorage);

  localStorage.clear();
});
