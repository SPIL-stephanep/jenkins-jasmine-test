/**
 * Jasmine test suite
 */

describe("My Demo Suite", function() {
	it("says hello to you", function() {
		var d = new demoClass();
		var name = 'Stephane';
		expect(d.greet(name)).toEqual('Hello, Stephane');
	});

	it("adds two numbers", function() {
		var d = new demoClass();
		var a = 1;
		var b = 3;
		expect(d.addition(a, b)).toEqual(4);
	});

	it("substracts two numbers", function() {
		var d = new demoClass();
		var a = 5;
		var b = 3;
		expect(d.substraction(a, b)).toEqual(1);
	});
});

/**
 * JStestDriver test suite
 */

/*var demoTest = TestCase("DemoTest");

demoTest.prototype.greet = function() {
	var dClass = new demoClass();
	assertEquals('Hello, Stephane', dClass.greet('Stephane'));
};

demoTest.prototype.addition = function() {
	var dClass = new demoClass();
	assertEquals(5, dClass.addition(2, 3));
};

demoTest.prototype.substraction = function() {
	var dClass = new demoClass();
	assertEquals(2, dClass.substract(5, 3));
};*/
