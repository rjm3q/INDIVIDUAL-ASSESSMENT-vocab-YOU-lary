import client from '../utils/client';

const url = client.databaseURL;

const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const makeWords = (payload) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const updateWords = (payload) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab/${firebaseKey}.json?`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const oneThing = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const filterWord = (uid, input) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (input === 'A-Z') {
        const alphaArray = Object.values(data).sort((a, b) => ((a.Name.toLowerCase() > b.Name.toLowerCase()) ? 1 : -1));
        resolve(alphaArray);
      } else if (input === 'Newest') {
        const newestArray = Object.values(data).sort((a, b) => ((a.Time_Submital > b.Time_Submital) ? 1 : -1));
        resolve(newestArray);
      } else if (input === 'Oldest') {
        console.warn('oldest!');
        const oldestArray = Object.values(data).sort((a, b) => ((a.Time_Submital > b.Time_Submital) ? -1 : 1));
        resolve(oldestArray);
      } else if (input !== 'all') {
        const filterArray = Object.values(data).filter((word) => word.Type.toLowerCase() === input);
        resolve(filterArray);
      } else {
        resolve(Object.values(data));
      }
    })
    .catch(reject);
});

export {
  getWords, makeWords, updateWords, deleteWord, oneThing, filterWord
};
