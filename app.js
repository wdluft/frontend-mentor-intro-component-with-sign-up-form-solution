const form = document.querySelector('#signupForm');
const inputs = document.querySelectorAll('input');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function checkForEmptyInput(input) {
  if (input.value === '') {
    input.classList.add('showError');
    input.nextElementSibling.textContent = `${input.getAttribute(
      'placeholder'
    )} cannot be empty`;
    input.nextElementSibling.classList.add('show-error-msg');
    input.nextElementSibling.classList.remove('hide-error-msg');
  } else {
    input.classList.remove('showError');
    input.nextElementSibling.classList.remove('show-error-msg');
    input.nextElementSibling.classList.add('hide-error-msg');
  }
}

function validateEmail(input) {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);

  if (!isValidEmail) {
    email.classList.add('showError');
    email.nextElementSibling.textContent = 'Looks like this is not an email';
    email.nextElementSibling.classList.add('show-error-msg');
    email.nextElementSibling.classList.remove('hide-error-msg');
  } else {
    email.classList.remove('showError');
    email.nextElementSibling.classList.remove('show-error-msg');
    email.nextElementSibling.classList.add('hide-error-msg');
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  inputs.forEach((input) => checkForEmptyInput(input));
  if (email.value !== '') {
    validateEmail(email);
  }
}

form.addEventListener('submit', handleFormSubmit);
