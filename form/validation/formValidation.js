import {
	inputTitle,
	inputAuthor,
	inputPriority,
	inputCategory,
	formErr,
} from '../../HTML_VARIABLES/HTML_VARIABLES.js';
import inputValidation from './inputValidation.js';
import toLowercaseAndTrim from '../../utils/toLowerCaseAndTrim.js';
import uid from '../../utils/uid.js';
import { books } from '../../storage/LocalStorage.js';

const formValidation = () => {
	const bookData = {
		titleValues: {
			title: toLowercaseAndTrim(inputTitle.value),
			titleErr: inputTitle.nextElementSibling,
		},
		authorValues: {
			author: toLowercaseAndTrim(inputAuthor.value),
			authorErr: inputAuthor.nextElementSibling,
		},
		priorityValues: {
			priority: +inputPriority.value,
			priorityErr: inputPriority.nextElementSibling,
		},
		category: inputCategory.options[inputCategory.selectedIndex].text,
	};

	let {
		titleValues: { title, titleErr },
		authorValues: { author, authorErr },
		priorityValues: { priority, priorityErr },
		category,
	} = bookData;

	const bookDataToAdd = {
		id: uid(),
		title,
		author,
		priority,
		category,
	};

	let errorsList = [];

	inputValidation(
		!title.length,
		titleErr,
		'Tekst musi posiadać co najmniej 1 znak.',
		errorsList
	);
	inputValidation(
		author.length < 3,
		authorErr,
		'Tekst musi posiadać co najmniej 3 znaki.',
		errorsList
	);
	inputValidation(
		priority < 1 || priority > 5,
		priorityErr,
		'Wybierz liczbę od 1 do 5.',
		errorsList
	);
	inputValidation(
		books.find(o => o.title === title),
		formErr,
		'Już istnieje książka o tym tytule.',
		errorsList
	);

	return { errorsList, bookDataToAdd };
};

export default formValidation;
