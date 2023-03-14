import { getWords, deleteWord, oneThing } from '../../api/promise';
import showWordForm from '../forms/showWordForm';
import { showWords } from '../../pages/words';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords);
        });
      }
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      oneThing(firebaseKey).then((card) => showWordForm(card));
    }

    // if (e.target.id.includes ('filter-word')) {
    //   const UserGen= document.querySelector(#filtered).value.toLowerCase();
    //   FilterWords(uid, UserGen).then(showWord)
    // }

    // if (e.target.id.includes ('')) {
    //     const [, firebaseKey] = e.target.id.split('--');
    // };
  });
};

export default domEvents;
