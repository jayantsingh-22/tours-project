/*eslint-disable*/
import '@babel/polyfill';
import { displayMap } from './mapbox.mjs';
import { login } from './login.mjs';

//DOM ELEMENTS
const mapBox = document.getElementById('map');

//VALUES
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  login(email, password);
});
