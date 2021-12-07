const MAX_VALUE = 5;
const MIN_VALUE = 1;

const blockTypingNumbers = e => {
	e.preventDefault();
	const input = e.target;
	let value = Number(input.value);
	const key = Number(e.key);
	if (Number.isInteger(key)) {
		value = Number('' + value + key);
		if (value > MAX_VALUE || value < MIN_VALUE) {
			return false;
		}
		input.value = value;
	}
};

export default blockTypingNumbers;
