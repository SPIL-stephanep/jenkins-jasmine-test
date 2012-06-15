var demoClass = function() {};

demoClass.prototype.testGreet = function(name) {
	return 'Hello, ' + name;
};

demoClass.prototype.testAddition = function(a, b) {
	return a + b;
};

demoClass.prototype.testSubstraction = function(a, b) {
	return a - b;
};