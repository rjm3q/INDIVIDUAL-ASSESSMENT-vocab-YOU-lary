import { showWords } from '../../pages/words';
import showWordForm from '../forms/showWordForm';
import { getWords } from '../../api/promise';

const navigationEvents = (uid) => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('view-words')) {
      getWords(uid).then(showWords);
    }

    if (e.target.id.includes('make-words')) {
      showWordForm();
    }
  });
};

export default navigationEvents;
