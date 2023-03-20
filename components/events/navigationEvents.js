import { signOut } from '../../utils/auth';
import showWordForm from '../forms/showWordForm';
import { jsFilter, htmlFilter,cssFilter, getWords } from '../../api/promise';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#show-all').addEventListener('click', () => {
    getWords(user.uid).then(showWordForm);
  })

  //Filters
  document.querySelector('#jsFilter').addEventListener('click', () => {
    jsFilter(user.uid).then(showWordForm);
  })

  document.querySelector('#htmlFilter').addEventListener('click', () => {
    htmlFilter(user.uid).then(showWordForm);
  })

  document.querySelector('#cssFilter').addEventListener('click', () => {
    cssFilter(user.uid).then(showWordForm);
  })
};

export default navigationEvents;
