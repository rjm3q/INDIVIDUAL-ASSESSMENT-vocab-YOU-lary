import { getWords, makeWords, updateWords } from '../../api/promise';
import { showWords } from '../../pages/wordCard';

const formEvents = (user) => {
  document.querySelector('#navigation').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('#create-word')) {
      const payload = {
        Name: document.querySelector('#Name').value,
        Definition: document.querySelector('#Definition').value,
        Time_Submital: Date.now().toLocaleString(),
        Type: document.querySelector('#Type').value,
        uid: user.uid,
      };
      makeWords(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        console.warn(payload);
        updateWords(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
    }
    if (e.target.id.includes('#update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        Name: document.querySelector('#Name').value,
        Definition: document.querySelector('#Definition').value,
        Time_Submital: Date.now().toLocaleString(),
        Type: document.querySelector('#Type').value,
        firebaseKey,
      };
      updateWords(payload).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default formEvents;
