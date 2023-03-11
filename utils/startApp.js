import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import formEvents from '../components/events/formEvents';
import { getWords } from '../api/promise';
import { showWords } from '../pages/words';
import navBar from '../components/shared/navBar';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getWords(user.uid).then(showWords);
};

export default startApp;
