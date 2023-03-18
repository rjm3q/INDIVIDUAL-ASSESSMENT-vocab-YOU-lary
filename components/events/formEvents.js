import { getWords, makeWords, updateWords } from '../../api/promise';
import { showWords } from '../../pages/wordCard';

const formEvents = (user) => {
  document.querySelector('#navigation').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('#create-word')) {
      const payload = {
        Name: document.querySelector('#').value,
        Definition: document.querySelector('#').value,
        Time_Submital: Date.now(),
        Type: document.querySelector('#').value,
        uid: user.uid,
      };
      makeWords(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateWords(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
    }
  });
};

export default formEvents;
