import { showWords } from '../../pages/words';
import showWordForm from '../forms/showWordForm';
import { getWords } from '../../api/promise';
import addWordForm from '../forms/addWordForm';

const navigationEvents = (uid) => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-words')) {
      getWords(uid).then(showWords);
    }

    if (e.target.id.includes('#submit-word')) {
      addWordForm(uid).then(showWordForm(showWords));
    }
  });
};

export default navigationEvents;
