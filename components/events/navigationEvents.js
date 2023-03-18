import { signOut } from '../../utils/auth';
import showWordForm from '../forms/showWordForm';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('#logout-button')) {
      signOut();
    }
    if (e.target.id.includes('#create-word')) {
      showWordForm();
    }
    // if (e.target.id.includes(#filter-word)) {}
  });
};

export default navigationEvents;
