import getWords from '../api/promise';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { showWords } from '../pages/wordCard';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();

  getWords(user.uid).then((vocabs) => showWords(vocabs));
};

export default startApp;
