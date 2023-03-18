import {
  deleteWord, getWords, oneThing, filterWord
} from '../../api/promise';
import { showWords } from '../../pages/wordCard';
import showWordForm from '../forms/showWordForm';

const domEvents = (uid) => {
  document.querySelector('#pp').addEventListener('click', (e) => {
    if (e.target.id.includes('#delete-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteWord(firebaseKey).then(() => {
        console.warn(uid);
        getWords(uid).then(showWords);
      });
    }
    if (e.target.id.includes('#update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      oneThing(firebaseKey).then((card) => showWordForm(card));
    }
    if (e.target.id.includes('#filter-btn')) {
      const filter = document.querySelector('#input').value.toLowerCase();
      filterWord(uid, filter).then(showWords);
    }
    if (e.target.id.includes('#order-btn')) {
      const order = document.querySelector('#input').value;
      filterWord(uid, order).then(showWords);
    }
  });
};

export default domEvents;
