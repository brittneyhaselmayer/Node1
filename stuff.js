const counter = (arr) => {
	return 'there are ' + arr.length + ' elements in this array';
};

const adder = (a, b) => {
	return `The sum is ${a + b}`;
};

var randomNum = 3.454;
// console.log(adder(1, 3));
// console.log(counter(['matt', 'mike', 'jordan']));

module.exports = { counter, adder, randomNum };
