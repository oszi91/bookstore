import { inputPriority, form } from './HTML_VARIABLES/HTML_VARIABLES.js';
import { getBooksFromLS } from './storage/LocalStorage.js';
import blockTypingNumbers from './form/validation/blockTypingNumbers.js';
import onSubmit from './form/onSubmit.js';

const init = () => {
	document.addEventListener('DOMContentLoaded', getBooksFromLS);
	inputPriority.addEventListener('keypress', e => blockTypingNumbers(e));
	form.addEventListener('submit', onSubmit);
};

export default init;
