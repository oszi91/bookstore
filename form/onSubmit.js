import formValidation from './validation/formValidation.js';
import addBook from './addBook.js';
import { books } from '../storage/LocalStorage.js';
import { form } from '../HTML_VARIABLES/HTML_VARIABLES.js';

const onSubmit = e => {
	e.preventDefault();
	const { errorsList, bookDataToAdd } = formValidation();

	if (!errorsList.length) {
		addBook(bookDataToAdd);
		books.push(bookDataToAdd);
		form.reset();
	}
};

export default onSubmit;
