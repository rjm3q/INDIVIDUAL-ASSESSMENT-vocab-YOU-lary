import {
  deleteWord, getWords, oneThing
} from '../../api/promise';
import { showWords } from '../../pages/wordCard';
import showWordForm from '../forms/showWordForm';

const domEvents = (user) => {
  document.querySelector('#wordBox').addEventListener('click', (e) => {
    if (e.target.id.includes('#delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure about that?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords);
        });
      }
    }
    if (e.target.id.includes('#add-word')) {
      showWordForm(user);
    }
    if (e.target.id.includes('#update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      oneThing(firebaseKey).then((word) => showWordForm(word));
    }
  });
};

export default domEvents;
