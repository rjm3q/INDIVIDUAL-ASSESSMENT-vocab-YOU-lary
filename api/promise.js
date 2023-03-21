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

const htmlFilter = (uid) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = Object.values(data).filter((obj) => obj.Type === 'HTML');
      resolve(html);
    })
    .catch(reject);
});

const cssFilter = (uid) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const css = Object.values(data).filter((obj) => obj.Type === 'CSS');
      resolve(css);
    })
    .catch(reject);
});

const jsFilter = (uid) => new Promise((resolve, reject) => {
  fetch(`${url}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const js = Object.values(data).filter((obj) => obj.Type === 'JavaScript');
      resolve(js);
    })
    .catch(reject);
});

export {
  getWords, makeWords, updateWords, deleteWord, oneThing, jsFilter, htmlFilter, cssFilter
};
