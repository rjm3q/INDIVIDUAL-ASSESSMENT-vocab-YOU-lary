import { signOut } from '../../utils/auth';
import showWordForm from '../forms/showWordForm';
import * as promise from '../../api/promise';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#show-all').addEventListener('click', () => {
    promise.getWords(user.uid).then(showWordForm);
  });

  // Filters
  document.querySelector('#jsFilter').addEventListener('click', () => {
    promise.jsFilter(user.uid).then(showWordForm);
  });

  document.querySelector('#htmlFilter').addEventListener('click', () => {
    promise.htmlFilter(user.uid).then(showWordForm);
  });

  document.querySelector('#cssFilter').addEventListener('click', () => {
    promise.cssFilter(user.uid).then(showWordForm);
  });
};

export default navigationEvents;
