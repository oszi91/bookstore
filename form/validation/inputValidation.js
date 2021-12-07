const inputValidation = (condition, err, errTxt, errList) => {
	if (condition) {
		err.textContent = errTxt;
		errList.push(errTxt);
	} else {
		err.textContent = '';
	}
};

export default inputValidation;