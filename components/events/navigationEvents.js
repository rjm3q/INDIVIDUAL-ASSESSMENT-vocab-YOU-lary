import { signOut } from '../../utils/auth';
import { showWords } from '../../pages/wordCard';
import {
  jsFilter, cssFilter, htmlFilter, getWords
} from '../../api/promise';
import showWordForm from '../forms/showWordForm';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-word').addEventListener('click', () => {
    showWordForm(user);
  });

  document.querySelector('#show-all').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });

  // Filters
  document.querySelector('#jsFilter').addEventListener('click', () => {
    jsFilter(user.uid).then(showWords);
  });

  document.querySelector('#htmlFilter').addEventListener('click', () => {
    htmlFilter(user.uid).then(showWords);
  });

  document.querySelector('#cssFilter').addEventListener('click', () => {
    cssFilter(user.uid).then(showWords);
  });
};

export default navigationEvents;
