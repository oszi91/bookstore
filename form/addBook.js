import { inputTitle, booklist } from '../HTML_VARIABLES/HTML_VARIABLES.js';
import { saveBookInLS } from '../storage/LocalStorage.js';

const addBook = (bookData, saveLS = true) => {
	const { title, author, priority, category } = bookData;
	inputTitle.nextElementSibling.textContent = '';
	const bookEl = document.createElement('tr');
	bookEl.classList.add('booklist__row');
	bookEl.innerHTML = ` 
    <td class="booklist__data">${title}</td>
    <td class="booklist__data">${author}</td>
    <td class="booklist__data">${priority}</td>
    <td class="booklist__data">${category}</td>
    `;
	booklist.appendChild(bookEl);
	if (saveLS) {
		saveBookInLS(bookData);
	}
};

export default addBook;
