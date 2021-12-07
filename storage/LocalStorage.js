import addBook from '../form/addBook.js';

export const checkLS = () => {
	let booklistArr;
	if (!localStorage.getItem('booklistArr')) {
		booklistArr = [];
	} else {
		booklistArr = JSON.parse(localStorage.getItem('booklistArr'));
	}
	return booklistArr;
};

export const saveBookInLS = book => {
	const booklistArr = checkLS();
	booklistArr.push(book);
	localStorage.setItem('booklistArr', JSON.stringify(booklistArr));
};

export const getBooksFromLS = () => {
	const booklistArr = checkLS();
	booklistArr.forEach(book => {
		addBook(book, false);
	});
};

export const books = checkLS();
