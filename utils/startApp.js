import { getWords } from '../api/promise';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { showWords } from '../pages/wordCard';
import filterBar from '../components/buttons/filter';
import navigationEvents from '../components/events/navigationEvents';
import formEvents from '../components/events/formEvents';
import domEvents from '../components/events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  filterBar();
  logoutButton();
  domEvents(user);
  formEvents(user);
  navigationEvents(user);

  getWords(user.uid).then((word) => showWords(word));
};

export default startApp;
